module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    nume: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [3, 50]
    },
    prenume: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [3, 50]
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      isEmail: true,
      allowNull: false
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rol: {
      type: DataTypes.STRING,
      defaultValue: "elev"
    },
    credit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    linkPhoto: {
      type: DataTypes.STRING,
    },
    descriere: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING
    }
  });
};
