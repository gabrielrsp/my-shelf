import Sequelize, { Model } from 'sequelize';

class Book extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      author: Sequelize.STRING,
      notes: Sequelize.STRING,
      url_image: Sequelize.STRING,
    },
    {
      sequelize,
    }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }

}

export default Book;
