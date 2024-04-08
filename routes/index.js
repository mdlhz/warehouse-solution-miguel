const express = require('express');
const router = express.Router();
const {
  getOrders,
  getProducts
} = require('../controller/orderController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Warehouse' });
});

module.exports = router;
