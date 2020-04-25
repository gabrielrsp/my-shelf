import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import Book from '../app/models/Book';
import Quote from '../app/models/Quote';

import databaseConfig from '../config/database';

const models = [User, File, Book, Quote];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    models.map(model => model.associate && model.associate(this.connection.models));
  }

}

export default new Database();
