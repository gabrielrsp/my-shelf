'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'quotes',
      'book_id',
      {
        type: Sequelize.INTEGER,
        references: { model: 'books', key:'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      }
    )
  },

  down: (queryInterface ) => {
      return queryInterface.removeColumn('book_id');
  }
};
