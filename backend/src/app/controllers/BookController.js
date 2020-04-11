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
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name, author, notes, image_id } = req.body;

    const book = await Book.create({
      user_id: req.userId,
      image_id,
      name,
      author,
      notes,
    });

    return res.json(book);
  }

  async index(req, res) {

    const books = await Book.findAll({
      attributes: ['id', 'name', 'author', 'notes', 'createdAt', 'updatedAt'],
      include: [{
        model: User,
        attributes: ['id', 'name'],
        where: {
          id: req.userId
        },
        order: ['updated_at']
      },
      {
        model: File,
        as: 'Image',
        attributes: ['id', 'name', 'path', 'url',],
      },

      ]
    });
    return res.json(books);
  }

  async show(req, res) {

    const { id } = req.params
    const book = await Book.findByPk(id)

    return res.json(book);
  }

  async update(req, res){

    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    const { id } = req.params
    const { name, author, notes, image_id } = req.body;

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

    console.log(book);

    await book.update(req.body)

    book = await Book.update(
      {
      name,
      author,
      notes,
      image_id,
      },
      {where: {id}}
    );

    return res.json({
      name,
      author,
      notes,
      image_id,
    });

  }


}

export default new BookController();


