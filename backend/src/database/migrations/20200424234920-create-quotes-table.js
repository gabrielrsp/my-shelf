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
          allowNull: false,

        },
        book_id: {
          type: Sequelize.INTEGER,
          references: { model: 'books', key:'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          allowNull: false,
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: { model: 'users', key:'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: false,
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
