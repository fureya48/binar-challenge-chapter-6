"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserGame extends Model {
    static associate(models) {
      UserGame.hasOne(models.UserBiodata, { foreignKey: "UserGameId" });
      UserGame.hasMany(models.UserHistory, { foreignKey: "UserGameId" });
    }
  }
  UserGame.init(
    {
      username: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserGame",
    }
  );
  return UserGame;
};
