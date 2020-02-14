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

module.exports = router;
