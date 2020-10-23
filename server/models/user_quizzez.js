module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_quizz', {
    scor: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });
};
