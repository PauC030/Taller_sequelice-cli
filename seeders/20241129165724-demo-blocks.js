'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("blocks", [ 
      {
        id: 1,
        titulo: "holahola",
        descripcion: "Public",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        titulo: "llfklffkfk",
        descripcion: "Publicoooo",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("blocks", null, {}); 
  }
};
