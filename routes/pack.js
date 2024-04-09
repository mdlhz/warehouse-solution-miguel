const express = require('express');
const router = express.Router();
const {
  getPackingList
} = require('../controller/orderController');

/* GET Packing List . */
router.get('/pack', function(req, res, next) {
  const packingList = getPackingList();
  // const list = (Object.entries(pickingList).map(item => `${item[0]} x ${item[1]}`));
  res.render('index', { title: 'Packing list', orders: packingList });
});

module.exports = router;
