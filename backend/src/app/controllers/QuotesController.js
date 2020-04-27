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

    const removedDuplicatesArray = Array.from(new Set(quotesArray))

    removedDuplicatesArray.map(quote => Quote.create({
      quote,
      book_id: id,
      user_id: req.userId
    }))


    return res.status(201).send();
  }
}
export default new QuotesController();
