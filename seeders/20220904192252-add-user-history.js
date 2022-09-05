'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserHistories', [{
         UserGameId: 1,
         playing_time: new Date(),
         result: 'win',
         createdAt: new Date(),
         updatedAt: new Date()
       },], {});
    await queryInterface.bulkInsert('UserHistories', [{
         UserGameId: 1,
         playing_time: new Date(),
         result: 'lose',
         createdAt: new Date(),
         updatedAt: new Date()
       },], {});
    await queryInterface.bulkInsert('UserHistories', [{
         UserGameId: 1,
         playing_time: new Date(),
         result: 'draw',
         createdAt: new Date(),
         updatedAt: new Date()
       },], {});
    await queryInterface.bulkInsert('UserHistories', [{
         UserGameId: 1,
         playing_time: new Date(),
         result: 'lose',
         createdAt: new Date(),
         updatedAt: new Date()
       },], {});
    await queryInterface.bulkInsert('UserHistories', [{
         UserGameId: 2,
         playing_time: new Date(),
         result: 'win',
         createdAt: new Date(),
         updatedAt: new Date()
       },], {});
    await queryInterface.bulkInsert('UserHistories', [{
         UserGameId: 2,
         playing_time: new Date(),
         result: 'lose',
         createdAt: new Date(),
         updatedAt: new Date()
       },], {});
    await queryInterface.bulkInsert('UserHistories', [{
         UserGameId: 2,
         playing_time: new Date(),
         result: 'win',
         createdAt: new Date(),
         updatedAt: new Date()
       },], {});
    await queryInterface.bulkInsert('UserHistories', [{
         UserGameId: 2,
         playing_time: new Date(),
         result: 'draw',
         createdAt: new Date(),
         updatedAt: new Date()
       },], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserHistories', null, {});
  }
};
