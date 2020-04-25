import Quote from '../models/Quote';

var xlsx = require("xlsx");

class QuotesController {
  async store(req, res) {

    const { filename } = req.file;
    const { id } = req.params;

    var reader = xlsx.readFile(`./tmp/uploads/${filename}`);
    var sheetName = reader.SheetNames[0];
    var table = reader.Sheets[sheetName];
    var data = xlsx.utils.sheet_to_json(table);

    data.splice(0, 6);

   const quotesArray = data.map(quote => quote.__EMPTY_2)
    console.log(quotesArray);

    const quotes = await

    quotesArray.map ( quote =>  Quote.create(
      {
        quote,
        book_id: id,
        user_id: req.userId
      })
    )
    return res.json(quotes);

  }
}

export default new QuotesController();
