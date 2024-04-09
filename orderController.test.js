const test = require('node:test');
const assert = require('assert/strict');
const {
  getOrders,
  getProducts,
  getPickingList,
  getPackingList
} = require('./controller/orderController');
// const orders = require('./data/orders.json');
// const products = require('./data/products.json');


test('get orders', () => {
  const orders = getOrders();
  return assert.equal(orders.orders.length, 10);
});

test('get products', () => {
  const products = getProducts();
  return assert.equal(products.products.length, 3);
});

test('get picking list', () => {
  const pickList = getPickingList()
  return assert.equal(Object.keys(pickList).length, 10);
});
test('get packing list', () => {
  const packList = getPackingList();

  return assert.equal(Object.keys(packList).length, 10);
})
