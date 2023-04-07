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
    await queryInterface.bulkInsert('list_banks', [
      {
        id: 1,
        nama_bank: 'BRI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        nama_bank: 'BNI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        nama_bank: 'BCA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        nama_bank: 'Mandiri',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        nama_bank: 'BTPN',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        nama_bank: 'CIMB Niaga',
        createdAt: new Date(),
        updatedAt: new Date()
      }
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
