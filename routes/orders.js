const express = require('express');
const router = express.Router();
const {
  getPickingList
} = require('../controller/orderController');

/* GET Orders . */
router.get('/orders', function(req, res, next) {
  const pickingList = getPickingList();
  const list =(Object.entries(pickingList).flat(1));
  res.render('index', { title: 'Orders', list: list });
});

module.exports = router;
