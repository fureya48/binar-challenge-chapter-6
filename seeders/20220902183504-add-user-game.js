'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('UserGames', [{
       username: 'Budi',
       password: 'testing123',
       createdAt: new Date(),
       updatedAt: new Date()
     },{
      username: 'Udin',
      password: 'testing321',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('UserGames', null, {});
  }
};
