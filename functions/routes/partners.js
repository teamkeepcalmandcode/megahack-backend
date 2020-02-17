var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  let result = [
    {
      id: 1,
      title: "Coca-Cola"
    }, {
      id: 2,
      title: "Pizza Hut"
    }
  ];

  res.json(result);
});

module.exports = router;
