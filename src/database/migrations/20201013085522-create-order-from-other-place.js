'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OrderFromOtherPlaces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      testType: {
        type: Sequelize.STRING,
      },
      awaitTime: {
        type: Sequelize.STRING,
      },
      Price: {
        type: Sequelize.STRING,
      },
      facilityName: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      sex: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING,
      },
      district: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      createdAt: {  
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    );
    
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('OrderFromOtherPlaces');
  }
};