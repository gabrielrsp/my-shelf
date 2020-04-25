
var xlsx = require("xlsx");


    var reader = xlsx.readFile('./tmp/uploads/5ded1d0cfdacd8f571460e97b34c2d79.xlsx');
    var sheetName = reader.SheetNames[0];
    var table = reader.Sheets[sheetName];
    var data = xlsx.utils.sheet_to_json(table);

    data.splice(0, 6);

    const quotesArray = data.map(quote => (
      {

      quote: quote.__EMPTY_2,

    }
    ))
    console.log(quotesArray);



