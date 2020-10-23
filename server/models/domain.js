module.exports = function(sequelize, DataTypes) {
    return sequelize.define('domain', {
      nume: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [3, 50]
      },
      descriere: {
          type: DataTypes.STRING
    });
  };
}