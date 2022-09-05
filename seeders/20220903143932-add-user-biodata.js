'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('UserBiodata', [{
         UserGameId: 1,
         dob: new Date(),
         pob: "Jakarta",
         city: "Bekasi",
         gender: "male",
         createdAt: new Date(),
         updatedAt: new Date()
       },{
        UserGameId: 2,
        dob: new Date(),
        pob: "Bandung",
        city: "Bekasi",
        gender: "female",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('UserBiodata', null, {});
  }
};
