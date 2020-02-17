var express = require('express');
const constants = require('../constants');
var router = express.Router();

router.get('/', function (req, res, next) {
  const { partner } = req.query;

  let result = [];
  
  switch(partner) {
    case '1':
      result.push({
        title: constants.CAMPAIGN_1,
        id: 1
      });
      break;
    case '2':
      result.push({
        title: constants.CAMPAIGN_2,
        id: 2
      });
      break;
  }

  res.json(result);
});

module.exports = router;
