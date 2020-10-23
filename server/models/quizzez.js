module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quizz', {
    titlu: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    descriere: {
      type: DataTypes.STRING,
      unique: true,
    },
    puncte: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};
