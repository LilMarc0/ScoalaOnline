const express = require('express');
const router = express.Router();
const multer = require("multer");
let fs      = require('fs')
let path    = require('path');
var upload = multer({ dest: '../static/' })

const getConnection = require('../sqlConnection');


router.post('/curs', upload.fields([{'name': 'tmb'}, {'name':'demo'}]), (req, res)=>{
    let model = JSON.parse(req.body.model);
    model.linkThumbnail = '/' + req.files.tmb[0].filename;
    model.linkDemo = '/' + req.files.demo[0].path;
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

router.get('/curs', (req, res)=>{
    getConnection((err, connection) => {
        if(err) {console.log('Category insert error');}
        connection.query('select * from Cursuri', (err, results, fields) => {
            if(err) { console.log(err)};
            if(results){
                console.log(JSON.parse(JSON.stringify(results)));
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
            if(err) { console.log(err)};
            if(results){
                res.send(JSON.parse(JSON.stringify(results)));
            } else{
                res.send({message: 'nf'})
            }
        });
        connection.release();
    })
})

router.get('/curs/video/', (req, res) => {
    console.log('intra');
	let file = '../uploads/Sample.mp4';
	fs.stat(file, function(err, stats) {
		if(err){
			if(err.code === 'ENOENT'){
				return res.sendStatus(404);
			}
			return next(err)
		}
		let range = req.headers.range;
		if(!range){
			let err = new Error('Wrong range');
				err.status = 416;
			return next(err);
		}
		let positions = range.replace(/bytes=/, '').split('-');
		let start = parseInt(positions[0], 10);
		let file_size = stats.size;
		let end = positions[1] ? parseInt(positions[1], 10) : file_size - 1;
		let chunksize = (end - start) + 1;

		let head = {
			'Content-Range': 'bytes ' + start + '-' + end + '/' + file_size,
			'Accept-Ranges': 'bytes',
			'Content-Length': chunksize,
			'Content-Type': 'video/mp4'
        }
        
		res.writeHead(206, head);
		let stream_position = {
			start: start,
			end: end
		}
		let stream = fs.createReadStream(file, stream_position)

		stream.on('open', function() {
			stream.pipe(res);
		})
		stream.on('error', function(err) {
			return next(err);
		});

	});
})

module.exports = router