var express = require('express');
var router = express.Router();
const apiController = require('../controllers/apiController');

/* GET home page. */

router.get('/category',apiController.getCategories);



module.exports = router;
