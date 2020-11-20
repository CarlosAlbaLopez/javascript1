'use strict';

// for (let i = 0; i < 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log('Vuelta', i);
// }

// function sumar(a, b) {
//   return a + b;
//   console.log('Esto no se ejecuta por estar después del return');
// }

// let suma = sumar(5, 5);
// console.log(suma);

// function hey() {
//   console.log('hey');
//   return 'lo que sea';
// }

// let resultado = 2;
// resultado = hey();
// console.log(resultado);

// // Con el + delante del prompt convertimos el dato a número
// const pedirleUnNumeroAlUsuario = +prompt('Ola k ase');
// console.log(pedirleUnNumeroAlUsuario);

/*
Quiero hacer una función para desactivar una bomba
La bomba nos va a dar 5 intentos para desactivarla
Cada intento nos lo pide por el prompt
Si conseguimos desactivar la bomba saca un mensaje por la consola y no pide más intentos
Si agotamos todos los intentos explota (sacar por la consola BOOM!)
*/

// const numeroAleatorio = Math.round(Math.random() * 10);
// let pedirAlUsuarioElegirNumero = '';

// function desactivarBomba(numeroIntentos) {
//   for (let i = 0; i < numeroIntentos; i++) {
//     pedirAlUsuarioElegirNumero = +prompt('Elige un número del 0 al 10');
//     if (i === numeroIntentos - 1) {
//       console.log('BOOM!');
//       break;
//     } else if (numeroAleatorio === pedirAlUsuarioElegirNumero) {
//       console.log('Has desactivado la bomba :)');
//       break;
//     } else {
//       console.log('Has fallado, te quedan', numeroIntentos - i - 1, 'intentos.');
//     }
//   }
// }

// desactivarBomba(5);

/*
- Hacer una función que diga si un número es divisible entre otro
  Para esto podéis usar el operador de módulo
  Esta función devuelve true si es divisible y false si no es divisible
  Un número es divisible entre otro cuando el resto de su división es 0
- Otra función (usar la de antes) y que diga si un número es primo o no
  Va a devolver true si es primo y false si no es primo
  Un número es primo si ningún número desde el 2 (incluido) hasta él mismo menos 1 lo dividen con resto 0
  Solo probamos numeros enteros
- Una última función que saca los números primos hasta el 100
*/

function esDivisible(a, b) {
  if (a % b === 0) {
    return true;
  } else {
    return false;
  }
}

function esPrimo(a) {
  for (let i = 2; i < a; i++) {
    if (esDivisible(a, i) === true) {
      return false;
    }
  }
  return true;
}

function imprimirPrimos(a) {
  for (let i = 2; i <= a; i++) {
    if (esPrimo(i) === true) {
      console.log(i);
    }
  }
}

imprimirPrimos(100);

// Ejercicio con toString para convertir a Hexadecimal

// var num=111;
// var a=num.toString(2),
//     b=num.toString(8),
//     c=num.toString(16),
// console.log([a,b,c])
// //output: [ '1101111', '157', '6f' ]

// colorOf(255,0,0) should return "#ff0000"
// colorOf(0,111,0) should return "#006f00"
// colorOf(1, 2 ,3) should return "#010203"

function colorOf(r, g, b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);
  return '#' + r + g + b;
}

console.log(colorOf(255, 0, 0));
console.log(colorOf(0, 111, 0));
console.log(colorOf(1, 2, 3));
