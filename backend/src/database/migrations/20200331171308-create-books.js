'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('books',
        {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        author: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        notes: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        url_image: {
          type: Sequelize.STRING,
          allowNull: true,
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
      return queryInterface.dropTable('books');
  }
};
