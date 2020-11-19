'use strict';

// // Función sin parámetros ni return
// function hola() {
//   console.log('hola');
// }

// hola();

// // Función con un parámetro y sin return
// function double(ammount) {
//   console.log(ammount * 2);
// }

// double(2);
// double(3);
// double(4);

// // Función con varios parámetros y sin return
// function multiply(parameter1, parameter2) {
//   console.log(parameter1 * parameter2);
// }

// const width = 10;
// const heigth = 5;

// multiply(width, heigth);

// // Función pura con parámetros y return
// function multiply2(parameter1, parameter2) {
//   return parameter1 * parameter2;
// }

// const result = multiply2(50, 34);
// console.log(result);

// // Bucles

// // While
// let counter = 0;
// while (counter <= 100) {
//   console.log(counter);
//   counter++;
// }

// // Do While
// counter = 0;
// do {
//   console.log(counter);
//   counter++;
// } while (counter <= 100);

// // For

// function triple(ammount) {
//   return ammount * 3;
// }

// for (let i = 100; i >= 0; i--) {
//   console.log(triple(i));
// }

/*
Hacer una función a la que se le pasa un parámetro
El parámetro va a ser un número
El número indica la cantidad de pisos de una pirámide

PIRÁMIDE 0
1
2
3
4
5

PIRÁMIDE 1
*
**
***
****
*****

PIRÁMIDE 2
    *
   **
  ***
 ****
*****

PIRÁMIDE 3
    *
   ***
  *****
 *******
*********

PIRÁMIDE 4
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

*/

// PIRÁMIDE 0
console.log('PIRAMIDE 0');
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// // PIRÁMIDE 1
// console.log('PIRAMIDE 1');
// function piramide1(pisos) {
//   let ladrillo = '*';
//   return ladrillo.repeat(pisos);
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(piramide1(i));
// }

// // PIRÁMIDE 2
// console.log('PIRAMIDE 2');
// function piramide2(pisos) {
//   let ladrillo = '*';
//   let espacio = ' ';
//   return espacio.repeat(5 - pisos) + ladrillo.repeat(pisos);
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(piramide2(i));
// }

// // PIRÁMIDE 3
// console.log('PIRAMIDE 3');
// function piramide3(pisos) {
//   let ladrillo = '*';
//   let espacio = ' ';
//   return espacio.repeat(5 - pisos) + ladrillo.repeat(pisos * 2 - 1);
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(piramide3(i));
// }

// // PIRÁMIDE 4
// console.log('PIRAMIDE 4');
// function piramideMitadSuperior(pisos) {
//   let ladrillo = '*';
//   let espacio = ' ';
//   return espacio.repeat(5 - pisos) + ladrillo.repeat(pisos * 2 - 1);
// }

// function piramideMitadInferior(pisos) {
//   let ladrillo = '*';
//   let espacio = ' ';
//   return espacio.repeat(pisos) + ladrillo.repeat(9 - pisos * 2);
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(piramideMitadSuperior(i));
// }

// for (let i = 1; i <= 4; i++) {
//   console.log(piramideMitadInferior(i));
// }

// PIRÁMIDE 1
console.log('PIRAMIDE 1');

function piramide1(pisos) {
  let piso = '';
  let ladrillo = '*';
  for (let i = 1; i <= pisos; i++) {
    piso += ladrillo;
    console.log(piso);
  }
}

piramide1(5);

// PIRÁMIDE 2
console.log('PIRAMIDE 2');

function piramide2(pisos) {
  let piso = '';
  let espacio = '';
  let ladrillo = '';

  for (let i = 1; i <= pisos; i++) {
    espacio = '';
    for (let j = 1; j <= pisos - i; j++) {
      espacio = espacio + ' ';
    }
    ladrillo = ladrillo + '*';
    piso = espacio + ladrillo;
    console.log(piso);
  }
}

piramide2(5);

// PIRÁMIDE 3
console.log('PIRAMIDE 3');

function piramide3(pisos) {
  let piso = '';
  let espacio = '';
  let ladrillo = '';

  for (let i = 1; i <= pisos; i++) {
    espacio = '';
    for (let j = 1; j <= pisos - i; j++) {
      espacio = espacio + ' ';
    }
    if (i > 1) {
      ladrillo = ladrillo + '**';
    } else {
      ladrillo = ladrillo + '*';
    }
    piso = espacio + ladrillo;
    console.log(piso);
  }
}

piramide3(5);

// PIRÁMIDE 4
console.log('PIRAMIDE 4');

function piramide4(pisos) {
  let piso = '';
  let espacio = '';
  let ladrillo = '';

  for (let i = 1; i <= pisos; i++) {
    espacio = '';
    for (let j = 1; j <= pisos - i; j++) {
      espacio = espacio + ' ';
    }
    if (i > 1) {
      ladrillo = ladrillo + '**';
    } else {
      ladrillo = ladrillo + '*';
    }
    piso = espacio + ladrillo;
    console.log(piso);
  }
  piso = '';
  espacio = '';
  ladrillo = '';
  for (let k = 1; k <= pisos - 1; k++) {
    ladrillo = '';
    for (let l = 1; l <= pisos - k; l++) {
      if (l > 1) {
        ladrillo = ladrillo + '**';
      } else {
        ladrillo = ladrillo + '*';
      }
    }
    espacio = espacio + ' ';
    piso = espacio + ladrillo;
    console.log(piso);
  }
}

piramide4(5);
