const express = require('express');
const router = express.Router();        

const multer = require("multer");
let fs      = require('fs')
var upload = multer({ dest: '../static/' })

const {Chapter, Course} = require('../models')

router.get('/', (req, res)=>{
    Chapter.findAll().then(chapters => res.send(chapters));
})

router.get('/:id', (req, res) => {
    Chapter.findByPk(req.params.id).then(chapter => res.send(chapter))
});


router.put('/:id', async (req, res) => {
    const chapter = await Chapter.findById(req.params.id);
    if (!chapter) {
      return res.status(404).send('chapter with submitted ID not found');
    }
    try {
      const updatedChapter = await chapter.update({ name: req.body.name });
      res.send(updatedChapter);
    } catch(err) {
      res.status(400).send(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    const chapter = await Chapter.findByPk(req.params.id);
    if (chapter) {
      await chapter.destroy();
      res.send(chapter);
    }
  });

module.exports = router