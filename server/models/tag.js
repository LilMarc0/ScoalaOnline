module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tag', {
      eticheta: {
        type: DataTypes.STRING,
        allowNull: false
      },
    });
  };
  