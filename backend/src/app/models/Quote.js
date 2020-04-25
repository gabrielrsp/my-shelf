import Sequelize, { Model } from 'sequelize';

class Quote extends Model {
  static init(sequelize) {
    super.init({
      quote: Sequelize.TEXT,
    },
    {
      sequelize,
    }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
    this.belongsTo(models.Book, { foreignKey: 'book_id' });
  }

}

export default Quote;
