import Quote from '../models/Quote';

var xlsx = require("xlsx");
var fs = require('fs');

class QuotesController {
  async store(req, res) {

    const { filename } = req.file;
    const { id } = req.params;

    try {

      var reader = xlsx.readFile(`./tmp/uploads/${filename}`);
      var sheetName = reader.SheetNames[0];
      var table = reader.Sheets[sheetName];
      var data = xlsx.utils.sheet_to_json(table);

      fs.unlink(`./tmp/uploads/${filename}`, function (err) {
        if (err) throw err;
      });

    } catch (err) {
      return res.status(401).json({ error: 'Invalid File' });
    }

    data.splice(0, 6);

    const quotesArray = data.map(quote => quote.__EMPTY_2)

    //removing duplicates
    const quotes = Array.from(new Set(quotesArray))

    quotes.map(quote => Quote.create({
      quote,
      book_id: id,
      user_id: req.userId
    }))

    return res.status(201).json({ quotes });
  }

  async deleteOne(req, res) {

    const { id } = req.params;

    const quote = await Quote.findOne({
      where:
      {
        id,
        user_id: req.userId
      }
    });

    if (quote) {
      await Quote.destroy({
        where: {
          id,
          user_id: req.userId
        }
      })

      return res.status(200).json({ messsage: 'quote removed from database' });

    } else {
      return res.status(400).json({ error: 'failed to remove quote' });
    }
  }


  async deleteAll(req, res) {

    const { id } = req.params;
    await Quote.destroy({
      where: {
        book_id: id,
        user_id: req.userId
      }
    })

    return res.status(200).json({ messsage: 'All quotes of this book removed from database' });
  }

}
export default new QuotesController();
