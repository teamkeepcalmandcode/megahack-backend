var express = require('express');
var router = express.Router();
var feedbackController = require('../controller/feedback');

router.get('/', feedbackController.index);
router.post('/', feedbackController.store);
router.get('/report/:idCampaign', feedbackController.report);

module.exports = router;
