const express = require('express');
const router = express.Router();
const getConnection = require('../sqlConnection')




// CREATE
// Creez o categorie bazata pe un model primit din frontend
router.post('/categorii', (req, res) => {
    getConnection((err, connection) => {
        if(err) {console.log('Category insert error');}
        connection.query('INSERT INTO Categorii SET ?', req.body, (err, results, fields) => {
            if(err) { console.log(err)};
            console.log(results);
        });
        connection.release();
    })
})

// READ
// Raspund cu obiectul unei categorii avand id-ul sau
router.get('/categorii/:id', (req, res)=>{
    getConnection((err, connection) => {
        if(err) {console.log('Category read error');}
        connection.query('select * from Categorii where idCategorii = ?', [req.params.id], (err, results, fields) => {
            if(err) {  console.log(err)};
            if(results){
                res.send({...results[0], message: 'ok'});
            } else{
                res.send({message: 'nf'})
            }
        });
        connection.release();
    })
})

router.get('/categorii/dupa_materie/:id', (req, res)=>{
    getConnection((err, connection) => {
        if(err) {console.log('Category read error');}

        connection.query(`select * from Categorii where idMaterie = ${req.params.id}`, (err, results, fields) => {
            if(err) {  console.log(err)};
            if(results){
                res.send(JSON.parse(JSON.stringify(results)));
            } else{
                res.send({message: 'nf'})
            }
        });
        connection.release();
    })
})

// Raspund cu obiectul unei categorii avand numele sau si id-ul materiei
router.get('/categorii/nume/:nume/:idMaterie', (req, res)=>{
    getConnection((err, connection) => {
        console.log(req.params);
        if(err) {console.log('Category read error');}
        connection.query("select * from Categorii where nume_categorie = ? and idMaterie = ?", [req.params.nume, req.params.idMaterie], (err, results, fields) => {
            if(err) {  console.log(err)};
            if(results){
                console.log(results);
                res.send(JSON.parse(JSON.stringify(results[0])));
            } else{
                res.send({message: 'nf'})
            }
        });
        connection.release();
    })
})

// READ ALL
router.get('/categorii', (req, res)=>{
    getConnection((err, connection) => {
        if(err) {console.log('Category read error');}
        connection.query('select * from Categorii', (err, results, fields) => {
            if(err) {  console.log(err)};
            if(results){
                res.send({...results[0], message: 'ok'});
            } else{
                res.send({message: 'nf'})
            }
        });
        connection.release();
    })
})

// UPDATE
router.put('/categorii/:id', (req, res)=>{
    getConnection((err, connection) => {
        if(err) {console.log('Category insert error');}
        connection.query('update Categorii set ? where idCategorie = ?', [req.params.id], (err, results, fields) => {
            if(err) { console.log(err)};
            if(results){
                console.log(results);
                res.send({message: 'ok'});
            } else{
                res.send({message: 'nf'})
            }
        });
        connection.release();
    })
})

// DELETE
router.delete('categorii/:id', (req, res)=>{
    getConnection((err, connection) => {
        if(err) {console.log('Category insert error');}
        connection.query('delete from Categorii where idCategorie = ?', [req.params.id], (err, results, fields) => {
            if(err) { console.log(err)};
            if(results){
                res.send({message: 'ok'});
            } else{
                res.send({message: 'nf'})
            }
        });
        connection.release();
    })
})

module.exports = router