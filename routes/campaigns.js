var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  const { partner } = req.query;

  let result = [];

  switch(partner) {
    case '1':
      result.push({
        title: "Fanta uva e maçã verde",
        id: 1
      });
      break;
    case '2':
      result.push({
        title: "Pizza quadrada ou redonda",
        id: 2
      });
      break;
  }

  res.json(result);
});

module.exports = router;
