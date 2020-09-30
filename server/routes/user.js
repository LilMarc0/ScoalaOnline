const express = require('express');
const router = express.Router();

const getConnection = require('../sqlConnection');

router.get('/user/credit/:id', (req, res)=>{
    getConnection((err, connection) => {
        if(err) {console.log('User credit get error');}
        connection.query('select credit from Users where idUser=?', [req.params.id], (err, results, fields) => {
            if(err) { console.log(err)};
            res.send(JSON.parse(JSON.stringify(results)))
        });
        connection.release();
    })
})

router.put('/user/credit/:id/:newCredit', (req, res) => {
    getConnection((err, connection) => {
        if(err) {console.log('User credit update error');}
        connection.query('update Users set credit=? where idUser=?', [req.params.newCredit, req.params.id], (err, results, fields) => {
            if(err) { console.log(err)};
            console.log(`New credit for ${req.params.id} is ${req.params.newCredit}`);
        });
        connection.release();
    })
})

module.exports = router