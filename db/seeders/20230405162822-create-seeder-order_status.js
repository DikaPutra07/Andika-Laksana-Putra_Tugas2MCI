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
    await queryInterface.bulkInsert('order_statuses', [
      {
        id: 1,
        order_status: 'Menunggu Pembayaran',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        order_status: 'Order Berhasil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        order_status: 'Order Batal',
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
