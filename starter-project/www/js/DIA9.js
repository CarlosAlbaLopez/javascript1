'use strict';

const products = [
  { name: 'camisa', price: 18, inStock: true },
  { name: 'pantalon', price: 30, inStock: true },
  { name: 'calcetines', price: 7, inStock: true },
  { name: 'abrigo', price: 100, inStock: true },
];

// // some devuelve true si hay alguna coincidencia
// const someAbrigo = products.some((product) => {
//   console.log('ABRIGO', product.name);
//   return product.name === 'abrigo';
// });

// const someBrero = products.some((product) => {
//   return product.name === 'sombrero';
// });

// const someCamisa = products.some((product) => {
//   console.log('CAMISA', product.name);
//   return product.name === 'camisa';
// });

// // every devuelve true si todo son coincidencias
// const allProductsInStock = products.every((product) => {
//   console.log('VUELTA');
//   return product.inStock;
// });

// console.log(someAbrigo, someBrero);
// console.log(allProductsInStock);

// // find encuentra la primera coincidencia y almacena toda su info
// const losCalcetines = products.find((product) => {
//   return product.name === 'calcetines';
// });

// // si lo modificas también modificas el array original
// losCalcetines.price = 100;

// console.log(losCalcetines.price, losCalcetines, products);

// // findIndex encuentra el índice de la primera coincidencia
// const losCalcetinesIndex = products.findIndex((product) => {
//   return product.name === 'calcetines';
// });

// console.log(losCalcetinesIndex);

// const numerillos = [12, 3, 2, 1, 5, 52];

// console.log(numerillos);

// // sort ordena de menor a mayor...
// numerillos.sort((a, b) => {
//   return a - b;
// });

// console.log(numerillos);

// // ...o de mayor a menor
// products.sort((productA, productB) => {
//   return productB.price - productA.price;
// });

// console.log(products);
