var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  const { partner } = req.query;

  let result = [];
  const feedback = {
    quantity: 100,
    graphics: [{
      title: 'Por Cidade',
      result: [{
        label: 'Recife',
        quantity: 30
      }, {
        label: 'São Paulo',
        quantity: 40
      }, {
        label: 'Rio de janeiro',
        quantity: 30
      }]
    }, {
      title: 'Por Idade',
      result: [{
        label: 'Até 18 anos',
        quantity: 5
      }, {
        label: '18 à 25 anos',
        quantity: 65
      }, {
        label: '25 à 40 anos',
        quantity: 20
      }, {
        label: 'Acima de 40 anos',
        quantity: 10
      }]
    }]
  };

  switch(partner) {
    case '1':
      result.push({
        title: "Fanta uva e maçã verde",
        id: 1, 
        feedback
      });
      break;
    case '2':
      result.push({
        title: "Pizza quadrada ou redonda",
        id: 2,
        feedback
      });
      break;
  }

  res.json(result);
});

module.exports = router;
