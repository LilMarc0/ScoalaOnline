const dbConfig = require("../DB/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const User = require("./user.js")(sequelize, Sequelize);
const Category = require("./category.js")(sequelize, Sequelize);
const Quizz = require("./quizzez")(sequelize, Sequelize);
// const Teste = require("./teste.js")(sequelize, Sequelize);
// const User_teste = require("./user_teste.js")(sequelize, Sequelize);
// const User_raspunsuri = require("./user_raspunsuri.js")(sequelize, Sequelize);
const Course = require("./course.js")(sequelize, Sequelize);
const Tag = require("./tag.js")(sequelize, Sequelize);
const Chapter = require("./chapter.js")(sequelize, Sequelize);

User.belongsToMany(Course, { through: 'user_courses', onDelete: 'cascade ', hooks: true});
Course.belongsToMany(User, { through: 'user_courses', hooks: true });

Tag.belongsToMany(Course, { through: 'course_tags'});
Course.belongsToMany(Tag, { through: 'course_tags'});

Course.belongsToMany(Chapter, { through: 'course_chapters', onDelete: 'cascade', hooks: true });
Chapter.belongsToMany(Course, { through: 'course_chapters', hooks: true });


sequelize.sync().then(()=>{
  console.log("DB SYNCED");
})

module.exports = {
  User,
  Category,
  Quizz,
  Course,
  Tag,
  Chapter
};
