'use strict';

// // Tribonacci Kata exercise
// function tribonacci(signature, n) {
//   let result = [];

//   if (n > 2) {
//     for (let i = 0; i < 3; i++) {
//       result[i] = signature[i];
//     }
//     for (let i = 3; i < n; i++) {
//       result[i] = result[i - 1] + result[i - 2] + result[i - 3];
//     }
//   } else if (n > 0 && n < 3) {
//     for (let i = 0; i < n; i++) {
//       result[i] = signature[i];
//     }
//   }

//   return result;
// }

// console.log(tribonacci([1, 1, 1], 10), [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]);

// // Transform words Kata exercise
// function pigIt(str) {
//   let resultArr = [];
//   let arr = str.split(' ');
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === '!' || arr[i] === '?') {
//       resultArr[i] = arr[i];
//     } else {
//       resultArr[i] = arr[i].slice(1) + arr[i].slice(0, 1) + 'ay';
//     }
//   }

//   let result = resultArr.join(' ');

//   return result;
// }

// console.log(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay');

// // Duplicate Encoder Kata exercise
// function duplicateEncode(word) {
//   let resultArr = [];
//   let arr = word.toLowerCase().split('');
//   for (let i = 0; i < arr.length; i++) {
//     if (isDuplicated(word).includes(arr[i])) {
//       resultArr[i] = ')';
//     } else {
//       resultArr[i] = '(';
//     }
//   }
//   return resultArr.join('');
// }

// function isDuplicated(word) {
//   let arr = word.toLowerCase().split('');
//   let duplicatedCharacters = [];
//   for (let i = 0; i < arr.length; i++) {
//     let character = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       if (character === arr[j]) {
//         duplicatedCharacters += character;
//       }
//     }
//   }
//   return duplicatedCharacters;
// }

// console.log(duplicateEncode('Carrloss'));

// // Trabajando con Arrays
// const myArray = ['Inicial'];

// myArray.push('PUSH');
// myArray.unshift('UNSHIFT');

// console.log(myArray.indexOf('PUSH'));

// const loQueSaqueConPop = myArray.pop();
// const loQueSaqueConShift = myArray.shift();

// console.log(myArray);

// const numericos = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// const unCacho = numericos.slice(2, 6);

// console.log(unCacho);

// // Loops recursivos
// function factorial(theNumber) {
//   if (theNumber === 1) {
//     return 1;
//   }
//   return theNumber * factorial(theNumber - 1);
// }

// console.log(factorial(5));

// function factorialNoRecursivo(theNumber) {
//   let result = 1;

//   for (let i = 1; i <= theNumber; i++) {
//     result = result * i;
//   }
//   return result;
// }

// console.log(factorialNoRecursivo(5));

// // Fibonaccci Recursivo
// function fibonacciRecursivo(num) {
//   if (num < 2) {
//     return num;
//   }

//   return fibonacciRecursivo(num - 1) + fibonacciRecursivo(num - 2);
// }

// console.time('fibonacciRecursivo');
// console.log(fibonacciRecursivo(10));
// console.timeEnd('fibonacciRecursivo');

// // Fibonacci no Recursivo
// function fibonacciNoRecursivo(num) {
//   let a = 1,
//     b = 0,
//     temp;

//   while (num > 0) {
//     temp = a; //2
//     a = a + b; // 3
//     b = temp; // 2
//     num--; //0
//   }

//   return b;
// }

// console.time('fibonacciNoRecursivo');
// console.log(fibonacciNoRecursivo(10));
// console.timeEnd('fibonacciNoRecursivo');

// // Fibonacci memoización
// const cache = { 0: 0, 1: 1 };

// function fibonacciMemo(num) {
//   if (cache[num] || num === 0) {
//     return cache[num];
//   }

//   const computedValue = fibonacciMemo(num - 1) + fibonacciMemo(num - 2);
//   cache[num] = computedValue;
//   return computedValue;
// }

// console.time('fibonacciMemo');
// console.log(fibonacciMemo(10));
// console.timeEnd('fibonacciMemo');

// // Funciones implícitas
// const suma = function (a, b) {
//   return a + b;
// };

// const sumaArrow = (a, b) => {
//   return a + b;
// };

// const sumaReturnImplicito = (a, b) => a + b;

// // Callbacks
// function test(callback) {
//   callback();
// }

// const holi = () => {
//   console.log('Holi');
// };

// test(holi);

// // Programación funcional
// const algunosNumeros = [9, 8, 7, 6, 5];

// algunosNumeros.forEach((value, index) => {
//   console.log(index, value);
// });

// // Esto es equivalente al For Each de arriba
// for (let i = 0; i < algunosNumeros.length; i++) {
//   console.log(i, algunosNumeros[i]);
// }

// for (const numero of algunosNumeros) {
//   console.log('for...of', numero);
// }

// const users = [{ name: 'Ivan' }, { name: 'Ana' }, { name: 'Patricia' }];

// const userCallback = (user, index) => {
//   console.log(user, index);
// };

// console.log(users);

// users.forEach(userCallback);

/*
  Quiero hacer una funcion que admita de parametro un numero
  El numero va a representar el alto y ancho de un array bidimensional
  Quiero meter un simbolo en las diagonales del array
  y quiero sacar esto despues por la consola
*/

// function matrixGenerator(size) {
//   const matrix = [];

//   for (let i = 0; i < size; i++) {
//     matrix.push([]);
//     for (let j = 0; j < size; j++) {
//       matrix[i].push('*');
//     }
//   }
//   return matrix;
// }

// console.log(matrixGenerator(5));

// function changeDiagonals(matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     matrix[i][i] = '9';
//     matrix[i][matrix.length - i - 1] = '9';
//   }
// }

// function comboWombo(size) {
//   const matrix = matrixGenerator(size);
//   changeDiagonals(matrix);
//   return matrix;
// }

// console.log(comboWombo(5));

// // Ejercicio factorial con contador implementado
// function factorial(theNumber) {
//   if (theNumber === 1) {
//     return { result: 1, counter: 1 };
//   }

//   const previousFactorial = factorial(theNumber - 1);

//   return {
//     result: theNumber * previousFactorial.result,
//     counter: previousFactorial.counter + 1,
//   };
// }

// console.log(factorial(5));

// // Persistence Kata exercise
// const digitize = (n) => [...`${n}`].map((i) => parseInt(i));

// function persistencePrev(num) {
//   if (digitize(num).length === 1) {
//     return { result: 0, counter: 0 };
//   }

//   let iteracion = 1;
//   for (let i = 0; i < digitize(num).length; i++) {
//     iteracion = iteracion * digitize(num)[i];
//   }

//   return {
//     result: persistencePrev(iteracion).result,
//     counter: persistencePrev(iteracion).counter + 1,
//   };
// }

// function persistence(num) {
//   return persistencePrev(num).counter;
// }

// console.log(persistence(999));

// // Persistence Kata exercise con el contador declarado fuera
// const digitize = (n) => [...`${n}`].map((i) => parseInt(i));
// let contador = 0;

// function persistence(num) {
//   if (digitize(num).length === 1) {
//     return contador;
//   }
//   contador++;
//   let iteracion = 1;
//   for (let i = 0; i < digitize(num).length; i++) {
//     iteracion = iteracion * digitize(num)[i];
//   }
//   return persistence(iteracion);
// }

// console.log(persistence(25));
