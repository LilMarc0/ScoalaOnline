/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const multer = require("multer");
let fs      = require('fs')
var upload = multer({ dest: '../static/' })

const getConnection = require('../sqlConnection');

router.get('/test', (req, res)=>{
    res.send('dasd')
    console.log("da");
})


router.post('/capitole',  upload.fields([{'name': 'tmb'}, {'name':'demo'}]), async (req, res)=>{
    let model = JSON.parse(req.body.model);
    console.log(req.files);
    model.link_thumbnail =  req.files.tmb[0].filename;
    model.link_video = req.files.demo[0].path.split('/')[2];
    getConnection(async (err, connection) => {
        if(err) {console.log('Category insert error');}

        const insertPromise = new Promise((resolve, reject)=>{
            connection.query('insert into Capitole set ?', [model], (err, results) => {
                if(err) reject(new Error('CAPTIOLE SQL INSERT ERROR'))
                resolve(results.insertId)
            });
        })
        Promise.all([insertPromise]).then((insertId)=>{
            console.log([req.body.idCurs, insertId[0]]);
            connection.query("insert into Cursuri_has_Capitole set idCurs=? idCapitol='?'", [req.body.idCurs, insertId[0]], (err, res)=>{
                if(err) console.log(err);
                console.log(res);
            });
        })
        connection.release();
    })
})

router.post('/curs', upload.fields([{'name': 'tmb'}, {'name':'demo'}]), (req, res)=>{
    let model = JSON.parse(req.body.model);
    model.linkThumbnail =  req.files.tmb[0].filename;
    model.linkDemo = req.files.demo[0].path.split('/')[2];
    getConnection((err, connection) => {
        if(err) {console.log('Category insert error');}
        connection.query('insert into Cursuri set ?', [model], (err, results, fields) => {
            if(err) { console.log(err)};
            if(results){
                console.log('ok');
                res.send({message: 'ok'});
            } else{
                res.send({message: 'nf'})
            }
        });
        connection.release();
    })
})

router.put('/curs', upload.fields([{'name': 'tmb'}, {'name':'demo'}]), (req, res)=>{
    let model = JSON.parse(req.body.model);
    getConnection((err, connection) => {
        if(err) {console.log('Category insert error');}

        if(req.files.tmb) {
            connection.query('update Cursuri set linkThumbnail = ?', [req.files.tmb[0].filename], (err, results, fields) => {
                if(err) { console.log(err)}
            });
        }

        if(req.files.demo){
            connection.query('update Cursuri set linkDemo = ?', [req.files.demo[0].path.split('/')[2]], (err, results, fields) => {
                if(err) { console.log(err)}
            });
        }
        connection.release();
    })
})

router.get('/curs', (req, res)=>{
    getConnection((err, connection) => {
        if(err) {console.log('Category insert error');}
        connection.query('select * from Cursuri', (err, results, fields) => {
            if(err) { console.log(err)}
            if(results){
                res.send(JSON.parse(JSON.stringify(results)));
            } else{
                res.send({message: 'nf'})
            }
        });
        connection.release();
    })
})

router.get('/curs/:id', (req, res)=>{
    getConnection((err, connection) => {
        if(err) {console.log('Category insert error');}
        connection.query('select * from Cursuri where idCurs = ?', [req.params.id], (err, results, fields) => {
            if(err) { console.log(err)}
            if(results){
                res.send(JSON.parse(JSON.stringify(results)));
            } else{
                res.send({message: 'nf'})
            }
        });
        connection.release();
    })
})

router.get('/cursuri_has_capitole/:id', (req, res)=>{
    getConnection((err, connection) => {
        if(err) {console.log('Category insert error');}
        connection.query('select * from Cursuri_has_Capitole cc, Capitole c where cc.idCapitol = c.idCapitole and cc.idCurs = ?', [req.params.id], (err, results, fields) => {
            if(err) { console.log(err)}
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