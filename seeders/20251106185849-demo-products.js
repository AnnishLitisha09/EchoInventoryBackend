'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      { name: 'Dell Laptop', category: 'Electronics', price: 120, stock: 60, createdAt: new Date(), updatedAt: new Date() },
      { name: 'HP Elitebook', category: 'Electronics', price: 150, stock: 40, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Lenovo ThinkPad', category: 'Office', price: 200, stock: 80, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
