module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quiestion', {
    cerinta: {
      type: DataTypes.STRING,
      allowNull: false
    },
    raspuns_corect: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};
