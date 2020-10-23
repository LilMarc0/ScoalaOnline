const express = require('express');
const router = express.Router();        

const {Course, User, Chapter} = require('../models')

const multer = require("multer");
let fs      = require('fs')
var upload = multer({ dest: '../static/' })

router.get('/', async (req, res) => {
    const c = await Course.findAll({
        include: [
            {model: User}
        ]
    });
    res.json(c);
});

router.post('/',  upload.fields([{'name': 'tmb'}, {'name':'demo'}]), async (req, res) => {
    let model = JSON.parse(req.body.model);
    model.linkThumbnail =  req.files.tmb[0].filename;
    model.linkDemo = req.files.demo[0].path.split('/')[2];

    Course.create(model).then(course =>{
        if(course){
            res.send(course);
        }else{
            res.send({message: "err insert"})
        }
    })

});

router.get('/:id', async (req, res) => {
    const course = await Course.findByPk(req.params.id, {include:[{model: Chapter}]});
    if(course){
        res.json(course);
    } else{
        res.send({message: "err get course id"})
    }
});

router.delete('/:id', async (req, res) => {
    const course = await Course.findByPk(req.params.id);
    course.destroy().then(()=>res.send({message: "ok"}));
})

module.exports = router