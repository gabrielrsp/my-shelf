'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('quotes',
        {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        quote: {
          type: Sequelize.TEXT,
          allowNull: true,
          unique: true
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
  },

  down: queryInterface => {
      return queryInterface.dropTable('quotes');
  }
};
