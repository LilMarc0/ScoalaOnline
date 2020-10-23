const express = require('express');
const router = express.Router();        


const multer = require("multer");
let fs      = require('fs')
var upload = multer({ dest: '../static/' })

const {Chapter, Course} = require('../models');


// router.get('/', (req, res)=>{
//     Category.findAll().then(ctgs => res.send(ctgs));
// })

// USER e in req de la middleware, caut cursurile pe care le-a cumparat el
router.get('/:idCourse', async (req, res) => {
    const chapters = await Course.findAll({
        include: [
            {model: Chapter, where: {courseId: req.params.idCourse}}
        ]
    });
    res.json(chapters)
});


router.post('/:idCourse', upload.fields([{'name':'video'}]), async (req, res) => {
    let model = JSON.parse(req.body.model);
    model.linkVideo = req.files.video[0].path.split('/')[2];
    console.log(model);
    const chapter = await Chapter.create(model);
    chapter.addCourses(req.params.idCourse);  
    res.json(model);
})

router.get('/:idCurs', async (req, res) => {
    const courses = await User.findOne({
        where: {id: req.user.id},
        include: [{all: true, nested: true}]
    })
    console.log(courses);
})

module.exports = router