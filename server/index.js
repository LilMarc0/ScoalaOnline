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


const packagePublicIp = require('public-ip');
const object_hash = require('object-hash');

// APP
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors());
app.use(corsMiddleware);

const middlewares = require('./auth/middlewares');
app.use(middlewares.checkTokenSetUser);

const { isLoggedIn } = require("./auth/middlewares");
const auth = require("./routes/auth");

const authRouter = require('./routes/auth');
const categoriiRouter = require('./routes/categorii');
const materiiRouter = require('./routes/materii');
const grileRouter = require('./routes/grile');
const userRouter = require('./routes/user');
const cursRouter = require('./routes/cursuri');


app.use(authRouter);
app.use(categoriiRouter);
app.use(materiiRouter);
app.use(grileRouter);
app.use(userRouter);
app.use(cursRouter);


async function materieIdByName(name){
    return new Promise(function(resolve, reject) {
        console.log("nume materie: ", name);
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

app.listen(5001, () => {

});