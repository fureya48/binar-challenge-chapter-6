'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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