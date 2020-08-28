const express = require("express");
const monk = require("monk");
const cors = require("cors");
const bodyParser = require("body-parser")
require('dotenv').config();
const util = require('util');

const crypto = require('crypto');
const jwt = require('jsonwebtoken')
const exec = util.promisify(require('child_process').exec);
const packagePublicIp = require('public-ip');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

const db = monk(process.env.MONGO_URL);
const dbUsers = db.get('users');
const dbMaterii = db.get('materii');
const middlewares = require('./auth/middlewares');
app.use(middlewares.checkTokenSetUser);


db.then(() => {
    console.log('Connected correctly to ' + process.env.MONGO_URL)
    // dbMaterii.insert([
    //     {
    //         nume: "informatica",
    //         categorii: [
    //             {nume: "clasa a 5a", grile: []},
    //             {nume: "clasa a 6a", grile: []},
    //             {nume: "clasa a 7a", grile: []},
    //             {nume: "clasa a 8a", grile: []},
    //             {nume: "clasa a 9a", grile: []},
    //             {nume: "clasa a 10a", grile: []},
    //             {nume: "clasa a 11a", grile: []},
    //             {nume: "clasa a 12a", grile: []},

    //         ]
    //     },
    //     {
    //         nume: "matematica",
    //         categorii: [
    //             {nume: "algebra", grile: []},
    //             {nume: "geometrie", grile: []},
    //             {nume: "analiza", grile: []},
    //             {nume: "clasa a 5a", grile: []},
    //             {nume: "clasa a 6a", grile: []},
    //             {nume: "clasa a 7a", grile: []},
    //             {nume: "clasa a 8a", grile: []},
    //             {nume: "clasa a 9a", grile: []},
    //             {nume: "clasa a 10a", grile: []},
    //             {nume: "clasa a 11a", grile: []},
    //             {nume: "clasa a 12a", grile: []},

    //         ]
    //     },
        
    // ])
})

app.get('/me', (req, res) => {
    console.log(req.user);
    res.send({
        user: req.user
    })
});

app.get('/materii', (req, res) => {
    console.log(req.body);
    dbMaterii.find({}).then((docs)=>{
        res.send(docs.map((mat)=>mat.nume))
    })
})

app.get('/categorii/:materie', (req, res) => {
    console.log(req.params);
    dbMaterii.find({nume: req.params.materie}).then((docs) => {
        console.log(docs);
        res.send(docs[0].categorii.map((cat)=>cat.nume));
    })
})

app.get('/cursuri/:nume', (req, res) => {
    dbMaterii.findOne({nume: req.params.nume}).then((docs)=>{

    })
})

app.get('/:materie/:categorie', (req, res) => {
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
        let cb = doc.categorii.filter((c) => {return c.nume==model.categorie})[0]
        console.log(cb.grile);
        res.send(cb.grile)
    })
})

app.post('/categorii', (req, res) => {
    let model = req.body;

    let query = {
        "nume": model.materie,
        "categorii": {
            $elemMatch: {
                "nume": model.categorie
            }
        }
    }

    let setField = {
        $addToSet: {
            "categorii.$.grile": model
        }
    }
    console.log(query);
    dbMaterii.update(query, setField).then((doc) => {
        console.log(doc);
    })
    console.log(model);
})

app.post('/login', (req, res) => {
    const email = req.body.email;
    const pass = req.body.password;
    dbUsers.findOne({"credentials.email": email})
        .then((doc, err) => {
            if (err) {
                console.log(err);
            }
            if (doc) {
                const hash = crypto.createHash('sha256').update(pass).digest('base64');
                if (hash === doc.credentials.password) {
                    payload = {
                        _id: doc._id,
                        username: doc.credentials.username,
                        email: doc.credentials.email,
                        role: doc.credentials.role
                    }
                    jwt.sign(
                        payload,
                         process.env.TOKEN_SECRET,
                        { algorithm: 'RS256'},
                         (err, token) => {
                            if(err){
                                console.log(err);
                            } else{
                                res.json({
                                    token: token,
                                    username: doc.credentials.username,
                                    role: doc.credentials.role
                                });
                            }
                        });
                } else{
                    console.log('no user');
                    res.send({ token: null })   
                }
            } else {
                console.log('no user');
                res.send({ token: null })
            }
        })
});

app.post('/register', (req, res) => {
    console.log(req.body);
    req.body.password = crypto.createHash('sha256').update(req.body.password).digest('base64');
    dbUsers.insert([{credentials: req.body}])
        .then((docs) => {
            res.send({ message: 'ok' });
        })
        .catch((err) => {
            console.log(err);
        });
});

app.listen(5001, () => {

});