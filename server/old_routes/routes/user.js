const express = require('express');
const router = express.Router();

const getConnection = require('../sqlConnection');

router.get('/user/credit/:id', (req, res)=>{
    getConnection((err, connection) => {
        if(err) {console.log('User credit get error');}
        connection.query('select credit from Users where idUser=?', [req.params.id], (err, results, fields) => {
            if(err) { console.log(err)};
            res.send(results)
        });
        connection.release();
    })
})

router.put('/user/credit/:id/:newCredit', (req, res) => {
    getConnection((err, connection) => {
        if(err) {console.log('User credit update error');}
        connection.query('update Users set credit=? where idUser=?', [req.params.newCredit, req.params.id], (err, results, fields) => {
            if(err) { console.log(err)};
            res.send({message: 'ok'})
        });
        connection.release();
    })
})

router.get('/user/nume/:nume', (req, res)=>{
    getConnection((err, connection) => {
        if(err) {console.log('User credit get error');}
        connection.query('select * from Users where username=?', [req.params.nume], (err, results, fields) => {
            if(err) { console.log(err)}
            console.log(JSON.parse(JSON.stringify(results[0])));
            res.send(JSON.parse(JSON.stringify(results[0])))
        });
        connection.release();
    })
})

router.get('/user/:id', (req, res)=>{
    getConnection((err, connection) => {
        if(err) {console.log('User id get error');}
        connection.query('select * from Users where idUser=?', [req.params.id], (err, results, fields) => {
            if(err) { console.log(err)};
            res.send(JSON.parse(JSON.stringify(results[0])))
        });
        connection.release();
    })
})

router.get('/user_has_courses/:idUser', (req, res)=>{
        getConnection((err, connection) => {
            if(err) {console.log('User id get error');}
            connection.query('select * from Users_has_Cursuri where idUser=?', [req.params.idUser], (err, results, fields) => {
                if(err) { console.log(err)};
                console.log(JSON.parse(JSON.stringify(results)));
                res.send(JSON.parse(JSON.stringify(results)))
            });
            connection.release();
        })
})

router.post('/user_has_courses/:idCurs/:idUser', (req, res)=>{
    getConnection((err, connection) => {
        if(err) {console.log('User id get error');}
        connection.query('insert into Users_has_Cursuri set idUser=?, idCurs=?', [req.params.idUser, req.params.idCurs], (err, results, fields) => {
            if(err) { console.log(err)};
            res.send({message: 'ok'})
        });
        connection.release();
    })
})

module.exports = router