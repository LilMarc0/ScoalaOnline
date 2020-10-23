module.exports = function(sequelize, DataTypes) {
  return sequelize.define('category', {
    nume: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  });
};
