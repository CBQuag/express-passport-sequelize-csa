'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      { name: 'SpongeBob', password: bcrypt.hashSync('pineapple123', 10), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Arnold', password: bcrypt.hashSync('heyarnold123', 10), createdAt: new Date(), updatedAt: new Date() },
      { name: 'TommyPickles', password: bcrypt.hashSync('rugrats123', 10), createdAt: new Date(), updatedAt: new Date() },
      { name: 'FoxyBrown', password: bcrypt.hashSync('foxybrown123', 10), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Shaft', password: bcrypt.hashSync('shaft123', 10), createdAt: new Date(), updatedAt: new Date() },
      { name: 'SuperFly', password: bcrypt.hashSync('superfly123', 10), createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};