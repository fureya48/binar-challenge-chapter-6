'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserHistory extends Model {
    static associate(models) {
      UserHistory.belongsTo(models.UserGame, {foreignKey: 'UserGameId'})
    }
  }
  UserHistory.init({
    UserGameId: DataTypes.INTEGER,
    playing_time: DataTypes.DATE,
    result: DataTypes.ENUM('win', 'lose', 'draw')
  }, {
    sequelize,
    modelName: 'UserHistory',
  });
  return UserHistory;
};