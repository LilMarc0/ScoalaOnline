const express = require('express');
const router = express.Router();        

const {User, Course, Tag} = require('../models');
const user = require('../models/user');

router.post('/:idCurs', async (req, res) => {
    console.log(Course);
    console.log(req.user);
    const user = await User.findByPk(req.user.id);
    user.addCourses(req.params.idCurs);  
})

router.get('/:idCurs', async (req, res) => {
    const courses = await Course.findOne({
        where: {id: req.params.idCurs},
        include: [{model: Tag}]
    })
    
})

module.exports = router