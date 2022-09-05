'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserBiodata extends Model {
    static associate(models) {
      UserBiodata.belongsTo(models.UserGame, {foreignKey: 'UserGameId'})
    }
  }
  UserBiodata.init({
    UserGameId: DataTypes.INTEGER,
    dob: DataTypes.DATEONLY,
    pob: DataTypes.STRING,
    city: DataTypes.STRING,
    gender: DataTypes.ENUM('male', 'female')
  }, {
    sequelize,
    modelName: 'UserBiodata',
  });
  return UserBiodata;
};