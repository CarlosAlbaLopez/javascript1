'use strict';

// // HERENCIA EN CLASES
// class Person {
//   name;
//   constructor(name) {
//     this.name = name;
//   }

//   saludar() {
//     console.log(`Hola soy ${this.name}`);
//   }
// }

// class Police extends Person {
//   plateNumber;
//   constructor(name, plateNumber) {
//     super(name);
//     this.plateNumber = plateNumber;
//   }

//   detener() {
//     console.log('ALTO MANGANTE!');
//   }
// }

// const myPerson = new Person('Ana');
// const myPolice = new Police('Alberto', 14);

// console.log(myPerson);
// console.log(myPolice);
// console.log(myPolice instanceof Person);
// console.log(myPolice.__proto__.constructor.name);

// // Con set+espacio delante del nombre de la función esta es tratada como un parámetro por lo que puede modificarse (línea 64) como tal
// // Con get+espacio delante del nombre de la función esta es tratada como un parámetro por lo que puede ser llamada sin paréntesis ()
// class Rectangle {
//   data = { width: 0, height: 0 };
//   constructor(width, height, secret) {
//     this.data.width = width;
//     this.data.height = height;
//   }
//   // setter
//   set height(valor) {
//     this.data.height = valor;
//   }

//   set width(valor) {
//     this.data.width = valor;
//   }
//   //getter
//   get area() {
//     return this.data.width * this.data.height;
//   }
//   // función de clase habitual
//   getArea() {
//     return this.data.width * this.data.height;
//   }
// }

// const myRectangle = new Rectangle(4, 5);
// myRectangle.width = 9;
// console.log(myRectangle, myRectangle.area, myRectangle.getArea());

// // length funciona como un getter, aunque cambie la longitud sigue calculando bien y no lo llamo con paréntesis
// const myArray = [9, 8, 7, 6];
// myArray.push(17);
// console.log(myArray.length);

// PROCESO DE RECOLECCIÓN DE BASURA DE JAVASCRIPT
/*
  Javascript va eliminando aquello que no está referenciado, es decir, que no es accesible.
  Es un proceso automático que no se puede evitar
*/

// // Permutations Kata exercise
// let permutations = (string) => {
//   if (!string || typeof string !== 'string') {
//     return 'Please enter a string';
//   } else if (string.length < 2) {
//     return string.split('');
//   }

//   let permutationsArray = [];

//   for (let i = 0; i < string.length; i++) {
//     let char = string[i];

//     if (string.indexOf(char) !== i) continue;

//     let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length);

//     for (let permutation of permutations(remainingChars)) {
//       permutationsArray.push(char + permutation);
//     }
//   }
//   return permutationsArray;
// };

// console.log(permutations('aabb'));

// // Moving Zeros To The End Kata exercise
// function moveZeros(arr) {
//   let resultArray = [];
//   let numberOfZeros = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       resultArray.push(arr[i]);
//     } else {
//       numberOfZeros++;
//     }
//   }
//   for (let i = 0; i < numberOfZeros; i++) {
//     resultArray.push(0);
//   }
//   return resultArray;
// }

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));

// // Adding Big Numbers Kata exercise TRICKED
// function add(a, b) {
//   let sum = '';
//   let z, x;
//   let r = 0;
//   if (a.length >= b.length) {
//     z = a;
//     x = b;
//   } else {
//     z = b;
//     x = a;
//   }
//   let p = x.length;
//   for (let i = z.length; i > 0; i--) {
//     let t = (p > 0 ? parseInt(x.charAt(p - 1)) : 0) + parseInt(z.charAt(i - 1)) + r;
//     sum = (t % 10) + sum;
//     r = t < 10 ? 0 : Math.floor(t / 10);
//     p = p - 1;
//   }
//   if (r > 0) {
//     sum = r + sum;
//   }
//   if (sum.split('')[0] === '0') {
//     return sum.split('').slice(1).join('');
//   } else {
//     return sum;
//   }
// }

// console.log(add('063829983432984289347293874', '090938498237058927340892374089'));

// // Last digit of a large number Kata exercise TRICKED
// let asciiZero = '0'.charCodeAt(0);
// let findModulo = function (base, exponent) {
//   let mod = 0;
//   for (let i in exponent) {
//     //mod = (mod*10 + b[i] - '0')%a;
//     mod = (mod * 10 + exponent.charCodeAt(i) - asciiZero) % base;
//   }
//   return mod;
// };

// let lastDigit = function (str1, str2) {
//   if (str1.length === 1 && str2.length === 1 && str1 === '0' && str2 === '0') {
//     return 0;
//   }

//   if (str2.length === 1 && str2 === '0') {
//     return 1;
//   }

//   if (str1.length === 1 && str1 === '0') {
//     return 0;
//   }

//   let e = findModulo(4, str2);
//   if (e === 0) {
//     e = 4;
//   }

//   let res = Math.pow(str1[str1.length - 1].charCodeAt(0) - asciiZero, e);

//   // Return last digit of result
//   return res % 10;
// };

// console.log(lastDigit('10', '10000000000'));

// The observed PIN Kata exercise
function getPINs(observed) {
  let result = [];
  result.push(observed);
  if (observed.length === 1) {
    for (let i = 0; i < populate(observed[0]).length; i++) {
      result.push(populate(observed[0])[i]);
    }
  } else if (observed.length === 2) {
    let numbersToPermutate = observed.split('');
    for (let i = 0; i < observed.length; i++) {
      for (let j = 0; j < populate(observed[0]).length; j++) {
        numbersToPermutate.push(populate(observed[i])[j]);
      }
    }
    let permutationsArray = permutations(numbersToPermutate);
    console.log(permutationsArray);
  }
  return result;
}

function populate(num) {
  let neighbors = {
    0: ['8'],
    1: ['2', '4'],
    2: ['1', '3', '5'],
    3: ['2', '6'],
    4: ['1', '5', '7'],
    5: ['2', '4', '6', '8'],
    6: ['3', '5', '9'],
    7: ['4', '8'],
    8: ['5', '7', '9', '0'],
    9: ['6', '8'],
  };
  return neighbors[num];
}

console.log(getPINs('11'));
