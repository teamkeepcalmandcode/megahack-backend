var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  let result = [
    {
      title: "Fanta uva e maçã verde"
    }, {
      title: "Pizza quadrada ou redonda"
    }
  ];

  res.json(result);
});

module.exports = router;
