const { Sequelize, db, Model, DataTypes } = require("../db/connection");

class User extends Model {}

User.init(
  {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "User",
  }
);

module.exports = {
  User,
};
