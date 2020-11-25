'use strict';

// // Solución profe al ejercicio bomba
// function bomb(numeroIntentos) {
//   const password = Math.round(Math.random() * 10);

//   for (let i = 0; i < numeroIntentos; i++) {
//     const guess = +prompt('Mete un código');
//     if (guess === password) {
//       return true;
//     }
//   }
//   return false;
// }

// function playBomb(attempts) {
//   if (bomb(attempts)) {
//     console.log('DESACTIVADA');
//   } else {
//     console.log('BOOM!');
//   }
// }

// playBomb(5);

// // OBJETOS

// let user = {
//   name: 'Carlos',
//   age: 28,
//   pet: 'dog',
//   address: {
//     street: 'C/ Estrella',
//     number: 16,
//     cp: 15003,
//   },
// };

// if (user.age >= 18) {
//   user.adult = true;
// } else {
//   user['adult'] = false;
// }

// console.log(user);

// const elCampoAlQueQuieroAcceder = 'name';

// console.log(user.name, user[elCampoAlQueQuieroAcceder]);

// // Comparación de objetos
// const compi1 = { name: 'Iván' };
// const compi2 = compi1;

// /* Al declararlo como const se pueden cambiar tanto los datos como los valores
// Lo único que es constante es la referencia
// */
// compi1.age = 28;
// compi1.name = 'Pablo';

// console.log(compi1, compi2);

// // Copia de objetos
// let user = { name: 'Ivan' };

// let userCopy = { ...user, age: 18 };

// console.log(user, userCopy);

// let user = {
//   name: 'Carlos',
//   age: 28,
//   pet: 'dog',
//   address: {
//     street: 'C/ Estrella',
//     number: 16,
//     cp: 15003,
//   },
// };

// console.log(Object.keys(user), Object.values(user));

// const userCopy = { ...user };

// console.log(userCopy === user);

// const a = {};
// a.b = a;

// console.log(a);

// // ARRAYS
// let myArray = [{ name: 'Ivan' }, { name: 'Ana', address: { street: 'C/ Real', number: 1 } }];

// console.log(myArray[0], myArray[1].name);

// let myArrayCopy = [...myArray];

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// console.log(myArray.length);

// // Bit Counter
// let countBits = function (n) {
//   let binaryN = n.toString(2);
//   console.log(binaryN);
//   let binarySplited = binaryN.split('');
//   console.log(binarySplited);
//   let count = 0;
//   console.log(binarySplited.length);
//   for (let i = 0; i < binarySplited.length; i++) {
//     if (binarySplited[i] === '1') {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countBits(100));

// // return masked string
// function maskify(cc) {
//   let numberOfSharps = cc.length - 4;
//   let maskedPart = '';
//   for (let i = 0; i < numberOfSharps; i++) {
//     maskedPart += '#';
//   }
//   return maskedPart + cc.substring(cc.length - 4);
// }

// console.log(maskify('padpapdabfdb8555'));

// // Walk Tester
// function isValidWalk(walk) {
//   let countNorth = 0;
//   let countSouth = 0;
//   let countEast = 0;
//   let countWest = 0;
//   for (let i = 0; i < walk.length; i++) {
//     switch (walk[i]) {
//       case 'n':
//         countNorth++;
//         break;
//       case 's':
//         countSouth++;
//         break;
//       case 'e':
//         countEast++;
//         break;
//       case 'w':
//         countWest++;
//         break;
//     }
//   }
//   if (walk.length === 10 && countNorth === countSouth && countEast === countWest) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // List of List Checker
// function openOrSenior(data) {
//   let result = [];
//   for (let i = 0; i < data.length; i++) {
//     if (data[i][0] >= 55 && data[i][1] > 7) {
//       result[i] = 'Senior';
//     } else {
//       result[i] = 'Open';
//     }
//   }
//   return result;
// }

// // Pin Validator 4 or 6 digits and only numerical
// function validatePIN(pin) {
//   if (pin.length === 4 || pin.length === 6) {
//     let characters = pin.split('');
//     for (let i = 0; i < characters.length; i++) {
//       if (characters[i] === ' ' || characters[i] === '\n') {
//         return false;
//       } else if (characters[i] >= 0 && characters[i] <= 9) {
//         continue;
//       } else {
//         return false;
//       }
//     }
//   } else {
//     return false;
//   }
//   return true;
// }

// console.log(validatePIN('123\n'));
