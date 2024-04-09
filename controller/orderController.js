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

const getPackingList = function () {
  const orders = getOrders();
  const products = getProducts();
  let packingList = [];
  for (const order of orders.orders) {
    const packOrder = Object.create(null);
    packOrder["order-id"] = order.id;
    packOrder["order-date"] = order.date;
    packOrder["ships-to"] = [
      order["customer-name"],
      order["shipping-address"]
    ];
    packOrder["line-items"]  = order["line-items"].map(item => {
      return products.products.filter(product => product.id === item["product-id"]);
    }).flat(1);
    packingList.push(packOrder);
  }
  return packingList;
}
module.exports = {
  getOrders,
  getProducts,
  getPickingList,
  getPackingList
};
