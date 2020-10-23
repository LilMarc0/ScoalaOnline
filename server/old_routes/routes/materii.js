const express = require('express');
const router = express.Router();

const getConnection = require('../sqlConnection');

// Create
router.get('/materii', (req, res) => {
    getConnection((err, connection) => {
        if(err) {console.log('Materie get error');}
        connection.query('select * from Materii', (err, results, fields) => {
            if(err) { console.log(err)};
            res.send(JSON.parse(JSON.stringify(results)))
        });
        connection.release();
    })
})

// READ
router.get('/materii/:id', (req, res)=>{
    getConnection((err, connection) => {
        if(err) {console.log('Materii read error');}
        connection.query('select * from Materii where idMaterii = ?', [req.params.id], (err, results, fields) => {
            if(err) { console.log(err)};
            if(results){
                res.send({...results[0], message: 'ok'});
            } else{
                res.send({message: 'nf'})
            }
        });
        connection.release();
    });
})

router.get('/materii/nume/:nume', (req, res)=>{
    getConnection((err, connection) => {
        if(err) {console.log('Materii read error');}
        connection.query('select * from Materii where nume_materie = ?', [req.params.nume], (err, results, fields) => {
            if(err) { console.log(err)};
            if(results){
                res.send({materie: {...results[0]}, message: 'ok'});
            } else{
                res.send({message: 'nf'})
            }
        });
        connection.release();
    });
})
// Update

// Delete



module.exports = router