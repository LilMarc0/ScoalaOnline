const express = require("express");
const cors = require("cors");

var corsMiddleware = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //replace localhost with actual host
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');

    next();
}

const bodyParser = require("body-parser")
require('dotenv').config();

// APP
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors());
app.use(corsMiddleware);

const middlewares = require('./auth/middlewares');
app.use(middlewares.checkTokenSetUser);

const authRouter = require('./routes/auth');
const categoriiRouter = require('./routes/categories');
// const materiiRouter = require('./routes/materii');
// const grileRouter = require('./routes/grile');
const userRouter = require('./routes/user');
const cursRouter = require('./routes/course');
const userCourseRouter = require('./routes/user_courses');
const courseChapterRouter = require('./routes/course_chapters');
const chapterRouter = require('./routes/chapter');

app.use(authRouter);
app.use('/categorii/', categoriiRouter);
app.use('/user/', userRouter);
app.use('/curs', cursRouter);
app.use('/user_has_courses', userCourseRouter)
app.use('/course_has_chapters', courseChapterRouter)
app.use('/capitol', chapterRouter)


// Returneaza userul pentru autentificare n shit
app.get('/me', (req, res) => {
    try{
        res.send({
            user: req.user
        })
    }catch(err){
        console.log('---me ', err);
    }

});


app.post('/grile', async (req, res) => {
    let model = req.body;
    model.idMaterie =  await materieIdByName(model.materie);
    delete model.materie;
    model.idCategorie = await categorieIdByName(model.categorie, model.idMaterie);
    delete model.categorie;
    connection.query("insert into Grile set ?", model, (err, results, fields) => {
        if(err) console.log(err);
    })
})

app.listen(5001, () => {

});