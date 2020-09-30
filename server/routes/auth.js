const express = require('express');
const router = express.Router();        

const getConnection = require('../sqlConnection');
const crypto = require('crypto');
const jwt = require('jsonwebtoken')

router.post('/login', (req, res) => {
    const email = req.body.email;
    const pass = req.body.password;
    getConnection((err, connection) => {
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
                        _id: doc.idUser,
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
                                console.log('Err');
                                res.send({ token: null, message: "no_account"})   
                                console.log(err);
                            } else{
                                console.log(`${doc.username} s-a logat`);
                                res.json({
                                    message: 'ok',
                                    token: token,   
                                    username: doc.username,
                                    credit: doc.credit,
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
        connection.release();
    })
        
});



router.post('/register', (req, res) => {
    req.body.passwordHash = crypto.createHash('sha256').update(req.body.password).digest('base64');
    delete req.body.password;
    getConnection((err, connection) => {
        if(err) {console.log('Register error');}
        connection.query('INSERT INTO Users SET ?', req.body, (err, results, fields) => {
            if(err) { connection.release(); console.log(err)};
            console.log(results);
        });
        connection.release();
    })

});

module.exports = router