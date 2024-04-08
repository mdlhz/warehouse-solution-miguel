const orders = require('../data/orders.json');
const products = require('../data/products.json');

const getOrders = function () {
  // API Call
  return orders
};

const getProducts =  function () {
  // API Call
  return products;
}

const getPickingList = function () {
  const orders = getOrders();
  const products = getProducts();
  const countedProducts = Object.create(null);
  const pickingList = Object.create(null);

  // count products
  for (const order of orders.orders) {
    order["line-items"].map(item => {
      const currCount = countedProducts[item["product-id"]] ?? 0;
      countedProducts[item["product-id"]] = currCount + 1;
    });
  }

  // generate picking list
  for(product of products.products) {
    product.items.map(item => {
      pickingList[item] = countedProducts[product.id];
    });
  }

  return pickingList;
}
module.exports = {
  getOrders,
  getProducts,
  getPickingList
};
