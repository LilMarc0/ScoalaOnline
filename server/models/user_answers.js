module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_answer', {
    raspuns: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    corect: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
};
