var express = require('express');
var router = express.Router();
var router2 = express.Router();
const apiController = require('../controllers/apiController');

/* GET home page. */
router.get('/category',apiController.getCategories);

router2.get('/category2',apiController.getCategories);

module.exports = router;
