'use strict';

const { TIME } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'Hau',
      lastName: 'Tran',
      address: 'VietNam',
      phoneNumber: '0346916012',
      gender: 1,
      image: "jjkkdbpwgjjowjof343nosfjwjofj3wjp.jpg",
      roleId: 'ROLE',
      positionId: 'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    }])


  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
