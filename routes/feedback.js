var express = require('express');
var router = express.Router();
var feedbackController = require('../controller/feedback');

router.get('/', feedbackController.index);
router.post('/', feedbackController.store);

module.exports = router;
