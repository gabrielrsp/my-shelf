import Book from '../models/Book';
import User from '../models/User';
import File from '../models/File';
import * as Yup from 'yup';

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

    return res.json(book);
  }

  async index(req, res) {

    const books = await Book.findAll({
      attributes: ['id', 'name', 'author', 'notes', 'url_image', 'createdAt', 'updatedAt'],
      include: [{
        model: User,
        attributes: ['id', 'name'],
        where: {
          id: req.userId
        },
        order: ['updated_at']
      }
      ]
    });
    return res.json(books);
  }

  async show(req, res) {

    const { id } = req.params
    const book = await Book.findByPk(id)

    return res.json(book);
  }

  async delete(req, res) {

    const { id } = req.params
    const book = await Book.destroy({
       where: { id }
    });

    return res.json(book);
  }

  async update(req, res){

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
      {where: {id}}
    );

    return res.json({
      name,
      author,
      notes,
      url_image,
    });

  }


}

export default new BookController();


