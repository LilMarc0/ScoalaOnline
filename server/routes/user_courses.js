const express = require('express');
const router = express.Router();        

const {User, Course} = require('../models');
const user = require('../models/user');

// router.get('/', (req, res)=>{
//     Category.findAll().then(ctgs => res.send(ctgs));
// })

// USER e in req de la middleware, caut cursurile pe care le-a cumparat el
router.get('/', async (req, res) => {
    const courses = await Course.findAll({
        include: [
            {model: User}
        ]
    });
    //console.log(courses);
    res.json(courses)
});

router.post('/:idCurs', async (req, res) => {
    console.log(Course);
    console.log(req.user);
    const user = await User.findByPk(req.user.id);
    user.addCourses(req.params.idCurs);  
})

router.get('/:idCurs', async (req, res) => {
    const courses = await User.findOne({
        where: {id: req.user.id},
        include: [{all: true, nested: true}]
    })
    console.log(courses);
})

module.exports = router