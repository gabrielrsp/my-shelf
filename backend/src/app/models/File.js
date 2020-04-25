import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      path: Sequelize.STRING,
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${process.env.APP_URL}/files/${this.path}`;
        }
      }
    },
    {
      sequelize,
    }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Book, { foreignKey: 'book_id' });
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }

}

export default File;
