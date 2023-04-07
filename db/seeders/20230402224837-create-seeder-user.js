'use strict';

/** @type {import('sequelize-cli').Migration} */
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
    
    await queryInterface.bulkInsert('users', [
      {
        user_name: 'John Doe',
        alamat: 'Jl. Raya Cibubur no. 123',
        email: 'johndoe123@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_name: 'Jane Doe',
        alamat: 'Jl. Raya Cibubur no. 124',
        email: 'janedoe321@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_name: 'John Smith',
        alamat: 'Jl. Raya Cibubur no. 125',
        email: 'johnsmith333@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
