var express = require('express');
var router = express.Router();
const apiController = require('../controllers/apiController');
const apiController2 = require('../controllers/apiController2');

/* GET home page. */

router.get('/category',apiController.getCategories);

router.get('/category2',apiController2.getCategories);


module.exports = router;
