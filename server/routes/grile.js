const express = require('express');
const router = express.Router();
const getConnection = require('../sqlConnection')

// CREATE

// READ
router.get('/grile/:idMaterie/:idCategorie', (req, res)=>{
    getConnection((err, connection) => {
        if(err) {console.log('Grile get error');}
        connection.query('select * from Grile where idMaterie = ? and idCategorie = ?',
         [req.params.idMaterie, req.params.idCategorie], (err, results, fields) => {
            if(err) { console.log(err)};
            res.send(JSON.parse(JSON.stringify(results)))
        });
        connection.release();
    })
})

// UPDATE 
router.put('/grile/:id', (req, res)=>{
    getConnection((err, connection) => {
        if(err) {console.log('Category insert error');}
        connection.query('update Grile set ? where idGrile = ?', [req.body, req.params.id], (err, results, fields) => {
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

//create
router.post('/grile', (req, res)=>{
    getConnection((err, connection) => {
        if(err) {console.log('Category insert error');}
        connection.query('insert into Grile set ?', [req.body, req.params.id], (err, results, fields) => {
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

router.delete('/grile/:id', (req, res)=>{
    getConnection((err, connection) => {
        if(err) {console.log('Grile delete error');}
        connection.query('delete from Grile where idGrile = ?', [req.params.id], (err, results, fields) => {
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