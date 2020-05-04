import Book from '../models/Book';
import User from '../models/User';
import Quote from '../models/Quote';

import * as Yup from 'yup';

import Cache from '../../lib/Cache';

class BookController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      author: Yup.string(),
      notes: Yup.string(),
      image_url: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name, author, notes, url_image } = req.body;

    const book = await Book.create({
      user_id: req.userId,
      name,
      author,
      notes,
      url_image
    });

    if (book) {
      await Cache.invalidate('books');
    }

    return res.json(book);
  }

  async index(req, res) {

    const cached = await Cache.get('books');

    if (cached) {
      return res.json(cached);
    }

    const books = await Book.findAll({
      attributes: ['id', 'name', 'author', 'notes', 'url_image', 'createdAt', 'updatedAt'],
      include: {
        model: User,
        attributes: ['id', 'name'],
        where: {
          id: req.userId
        },
        order: ['updated_at']
      }

    });

    await Cache.set('books', books)

    return res.json(books);
  }


  async show(req, res) {

    const { id } = req.params

    const book = await Book.findByPk(id, {

      include: [
        {
          model: User,
          attributes: [],
          where: {
            id: req.userId
          },
          order: ['updated_at']
        },
        {
          model: Quote,
          attributes: ['id', 'quote', 'createdAt', 'updatedAt'],
        }
      ]

    });

    return res.json(book);
  }

  async delete(req, res) {

    const { id } = req.params

    const book = await Book.findOne({
      where:
      {
        id,
        user_id: req.userId
      }
    });

    if (book) {
      await Book.destroy({
        where: {
          id,
          user_id: req.userId
        }
      });

      await Cache.invalidate('books');

      return res.status(200).json({ messsage: 'book removed from database' });

    } else {
      return res.status(400).json({ error: 'failed to remove book' });
    }
  }

  async update(req, res) {

    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    const { id } = req.params
    const { name, author, notes, url_image } = req.body;

    let book = await Book.findByPk(id)

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    if (name && name !== book.name) {
      const nameExists = await Book.findOne({ where: { name } });

      if (nameExists) {
        return res.status(400).json({ error: 'User already exists' })
      }
    }

    await book.update(req.body)

    book = await Book.update(
      {
        name,
        author,
        notes,
        url_image
      },
      { where: { id } }
    );

    await Cache.invalidate('books');

    return res.json({
      name,
      author,
      notes,
      url_image,
    });

  }

}

export default new BookController();


