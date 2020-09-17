const express = require("express");
const cors = require("cors");

var corsMiddleware = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //replace localhost with actual host
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');

    next();
}


const bodyParser = require("body-parser")
require('dotenv').config();
const util = require('util');

const crypto = require('crypto');
const jwt = require('jsonwebtoken')
const exec = util.promisify(require('child_process').exec);
const packagePublicIp = require('public-ip');
const object_hash = require('object-hash');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use(corsMiddleware);

const middlewares = require('./auth/middlewares');
app.use(middlewares.checkTokenSetUser);

var mysql      = require('mysql');
const { isLoggedIn } = require("./auth/middlewares");
var connection = mysql.createPool({
  connectionLimit: 10,
  host     : process.env.SQL_HOST,
  user     : process.env.SQL_USER,
  password : process.env.SQL_PASS,
  database : process.env.SQL_DB,
  port: process.env.SQL_PORT
});


async function materieIdByName(name){
    return new Promise(function(resolve, reject) {
        console.log("nume: ", name);
        connection.query("select idMaterii from Materii where nume_materie = ?",  name, (err1, results1, fields) => {
            if(err1) reject(new Error("Nu pot sa gasesc id-ul materiei dupa nume"));
            resolve(results1[0].idMaterii);
        })
    })
};

async function categorieIdByName(name, idMat){
    
    return new Promise(function(resolve, reject){
        connection.query("select idCategorii from Categorii where nume_categorie = ? and idMaterie = ? ",  [name, idMat], (err1, results1, fields) => {
            if(err1) reject(new Error("Nu pot sa gasesc id-ul materiei dupa nume"));
    
            resolve(results1[0].idCategorii);
        })
    })

};


// Returneaza userul pentru autentificare n shit
app.get('/me', (req, res) => {
    try{
        res.send({
            user: req.user
        })
    }catch(err){
        console.log('---me ', err);
    }

});

// Numele materiilor(SQL)
app.get('/materii', (req, res) => {
    connection.query("select nume_materie from Materii", (err, results, fields) =>{
        res.send(results.map((r)=>r.nume_materie));
    })
})

// Materie dupa ID
app.get('/materii/:id', (req, res) => {
    connection.query("select nume_materie from Materii where idMaterii = ?", req.params.id, (err, results, fields)=> {
        if(err) console.log(err);
        res.send(results[0]);       
    })
})

// Numele categoriilor !!!!!! AICI CRAPA
app.get('/categorii/:materie', async (req, res) => {
    console.log(req.params);
    const idMat = await materieIdByName(req.params.materie);
        connection.query("select nume_categorie from Categorii where idMaterie = ?", idMat, (err2, results2, fields2) => {
            if(err2) console.log(err2);
            res.send(results2.map((r)=>r.nume_categorie))
        })
})

// obtine o grila (pentru edit)
app.get('/grila/:materie/:categorie/:id', (req, res) => {
    let model = req.params;

    let query = {
        "nume": model.materie,
        "categorii": {
            $elemMatch: {
                "nume": model.categorie
            }
        }
    }

    dbMaterii.findOne(query).then((doc) => {
        let grile = doc.categorii.filter((c) => {return c.nume==model.categorie})[0].grile
        let grila = grile.filter((g)=>{return g.id==model.id})
        res.send(grila[0])
    })
})

// returneaza lista de grile dintr-o categorie
app.get('/:materie/:categorie', async (req, res) => {
    let model = req.params;
    if(model.categorie == 'undefined') model.categorie = 'clasa a 5a';
    const idMat = await materieIdByName(model.materie);
    const idCategorie = await categorieIdByName(model.categorie, idMat);

    connection.query("select * from Grile where idCategorie = ? and idMaterie = ?", [idCategorie, idMat],
        (err, results, fields) => {
            res.send(results)
        })
})

app.post('/grile', async (req, res) => {
    let model = req.body;
    model.idMaterie =  await materieIdByName(model.materie);
    delete model.materie;
    model.idCategorie = await categorieIdByName(model.categorie, model.idMaterie);
    delete model.categorie;
    connection.query("insert into Grile set ?", model, (err, results, fields) => {
        if(err) console.log(err);
    })
})

app.post('/login', (req, res) => {
    const email = req.body.email;
    const pass = req.body.password;
    connection.query("select * from Users where Users.email = ?", [email], (err, results, fields) => {
        if (err) {
            res.send({ token: null, message: "no_account"})   
            console.log(err);
        }
        if (results) {
            let doc = {...results[0]};
            const hash = crypto.createHash('sha256').update(pass).digest('base64');
            if (hash === doc.passwordHash) {
                payload = {
                    _id: doc._id,
                    username: doc.username,
                    email: doc.email,
                    role: doc.rol
                }
                jwt.sign(
                    payload,
                     process.env.TOKEN_SECRET,
                    { algorithm: 'RS256'},
                     (err, token) => {
                        if(err){
                            res.send({ token: null, message: "no_account"})   
                            console.log(err);
                        } else{
                            res.json({
                                message: 'ok',
                                token: token,
                                username: doc.username,
                                role: doc.rol
                            });
                        }
                    });
            } else{
                console.log('no user');
                res.send({ token: null, message: "no_account"})   
            }
        } else {
            console.log('no user');
            res.send({ token: null, message: "no_account" })
        }
    })
});



app.post('/register', (req, res) => {
    req.body.passwordHash = crypto.createHash('sha256').update(req.body.password).digest('base64');
    delete req.body.password;
    connection.query('INSERT INTO Users SET ?', req.body, (err, results, fields) => {
        if(err) console.log(err);
        console.log(results);
    });
});

app.listen(5001, () => {

});