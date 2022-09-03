'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('UserBiodata', null, {});
  }
};
