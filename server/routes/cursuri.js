const express = require('express');
const router = express.Router();
const multer = require("multer");
var upload = multer({ dest: 'uploads/' })

const getConnection = require('../sqlConnection');


router.post('/curs', upload.fields([{'name': 'tmb'}, {'name':'demo'}]), (req, res)=>{
    let model = JSON.parse(req.body.model);
    model.linkThumbnail = req.files.tmb[0].path;
    model.linkDemo = req.files.demo[0].path;

    getConnection((err, connection) => {
        if(err) {console.log('Category insert error');}
        connection.query('insert into Cursuri set ?', [model], (err, results, fields) => {
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

router.get('/curs', (req, res)=>{
    console.log('a');
    getConnection((err, connection) => {
        if(err) {console.log('Category insert error');}
        connection.query('select * from Cursuri', (err, results, fields) => {
            if(err) { console.log(err)};
            if(results){
                console.log(results);
                res.send(JSON.parse(JSON.stringify(results)));
            } else{
                res.send({message: 'nf'})
            }
        });
        connection.release();
    })
})

module.exports = router