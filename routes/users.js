var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next) {
  const { login, password } = req.body;
  let resultLogin = {
    isLogged: false,
    isAdmin: false
  };

  if (login == 'admin' && password == 'admin') {
    resultLogin.isAdmin = true;
    resultLogin.isLogged = true;
  } else if(login == 'user' && password == 'user') {
    resultLogin.isLogged = true;
  }
  res.json(resultLogin);
});

router.get('/:userId', function (req, res, next) {
  const { userId } = req.params;

  res.json({
    id: userId,
    name: 'Barack Obama',
    genre: 'M',
    points: 4500,
    level: 'Gold'
  });
});

module.exports = router;
