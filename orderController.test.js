const test = require('node:test');
const assert = require('assert/strict');
const {
  getOrders,
  getProducts,
  getPickingList
} = require('./controller/orderController');
const orders = require('./data/orders.json');
const products = require('./data/products.json');


test('get orders', () => {
  const orders = getOrders();
  return assert.equal(orders.orders.length, 10);
});

test('get products', () => {
  const products = getProducts();
  return assert.equal(products.products.length, 3);
});

test('get picking list', () => {
  const list = [
    {name: "Red Roses Bouquet", qty: "5"},
    {name: "Box of chocolates", qty: "5"},
    {name: "Love card", qty: "5"},
    {name: "Women’s perfume", qty: "5"},
    {name: "Birthday cupcake", qty: "2"},
    {name: "$100 Visa Gift` Card", qty: "2"},
    {name: "Birthday card", qty: "2"},
    {name: "Bottle of wine", qty: "4"},
    {name: "Fruit basket", qty: "4"},
    {name: "Pen", qty: "4"}
  ];

  const pickList = getPickingList()

  return assert.equal(Object.keys(pickList).length, 10);

});
