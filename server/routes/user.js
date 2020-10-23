const express = require('express');
const router = express.Router();        

const {User, Course} = require('../models');
const user = require('../models/user');

const multer = require("multer");
let fs      = require('fs')
var upload = multer({ dest: '../static/' })


router.get('/', (req, res) => {

});

router.get('/:id', async (req, res) => {
    const usr = await User.findByPk(req.params.id, {
        include: [{model: Course}]
    });
    res.send(usr);
});

router.put('/profile/photo', upload.fields([{'name': 'photo'}]), async (req, res) =>{

    let usr = await User.findByPk(req.user.id);
    usr.linkPhoto = req.files.photo[0].path.split('/')[2];
    usr = await usr.save();
    res.json(usr.linkPhoto);
})

router.put('/:id', (req, res) => {
    User.update({
        ...req.body
    },
    {
        where: req.params.id
    });
    res.send({message: "ok"});
});

router.get('/credit/:id', (req, res) => {
    User.findByPk(req.params.id).then(usr => {
        res.json(usr.credit);
    })
});

module.exports = router