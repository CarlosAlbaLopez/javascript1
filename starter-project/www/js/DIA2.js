'use strict';

// const unNumero = 10;
// const otroNumero = 10;
// const unTexto = '10';
// const algoDistinto = 9;

// console.log(unNumero === otroNumero);
// console.log(unNumero === unTexto);
// console.log(unNumero !== unTexto);
// console.log(unNumero !== algoDistinto);

// const numeroCuenta = 1234567901234567890;

// console.log(numeroCuenta);

// const cinco = 5;
// const cuatro = 4;

// console.log(cinco > cuatro);

// // && AND --> Solo devuelve true cuando ambos lados son true
// console.log('AND');
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// // || OR  --> Devuelve true si alguno de los lados es true
// console.log('OR');
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// // !  NOT --> Devuelve lo contrario
// console.log('NOT');
// console.log(!true);
// console.log(!false);

// let edad = 27;
// if (edad >= 18 && edad <= 67) {
//   console.log('Está en edad de trabajar', edad);
// } else if (edad > 67) {
//   console.log('Está jubilado');
// } else {
//   console.log('Es menor de edad');
// }

// // Operador ternario (equivalente a un if else)
// let edad = 18;
// let frase = edad >= 18 ? 'Es mayor de edad' : 'Es menor de edad';
// console.log(frase);

// // Switch (equivalente a if else if else, puede llevar varios else if. Igualdad estricta ===)
// const myPet = 'perro';
// switch (myPet) {
//   case 'perro':
//     console.log('Tienes un perro');
//     break;
//   case 'gato':
//     console.log('Tienes un gato');
//     break;
//   default:
//     console.log('No se que animal tienes');
// }

// holi();

// function holi() {
//   console.log('Holi');
//   hola();
// }

// function hola() {
//   console.log('Hola');
// }

// function echo(message) {
//   console.log(message);
// }

// let text = 'Hola';

// echo(text);
// echo('Otra cosa');

function suma(parametro1, parametro2) {
  return parametro1 + parametro2;
}

const resultado = suma(14, 16);

let elDoble = resultado * 2;

console.log(elDoble);
