'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserHistories', [{
         UserGameId: 1,
         playing_time: new Date(),
         result: 'win'
       },{
        UserGameId: 1,
        playing_time: new Date(),
        result: 'lose'
      },{
        UserGameId: 1,
        playing_time: new Date(),
        result: 'win'
      },{
        UserGameId: 1,
        playing_time: new Date(),
        result: 'draw'
      },{
        UserGameId: 2,
        playing_time: new Date(),
        result: 'win'
      },{
       UserGameId: 2,
       playing_time: new Date(),
       result: 'lose'
     },{
       UserGameId: 2,
       playing_time: new Date(),
       result: 'win'
     },{
       UserGameId: 2,
       playing_time: new Date(),
       result: 'draw'
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserHistories', null, {});
  }
};
