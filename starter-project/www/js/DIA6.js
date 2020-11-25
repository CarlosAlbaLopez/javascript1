'use strict';

// const user = { name: 'Carlos' };

// if (user.address?.zip === 15004) {
//   console.log('15004');
// }

// console.log(user);

// const user = { name: 'Carlos', address: { calle: 'C/ Estrella', number: 16, cp: 15003 } };
// const userCopy = { ...user, address: { ...user.address } };

// userCopy.age = 20;

// console.log(user.name, user['name']);

// console.log('Las keys', Object.keys(user));
// console.log('Los valores', Object.values(user));

// // Text next to likes Kata exercise
// function likes(names) {
//   let text = ' likes this';
//   if (names.length === 0) {
//     text = 'no one' + text;
//   } else if (names.length === 1) {
//     text = names[0] + text;
//   } else if (names.length === 2) {
//     text = names[0] + ' and ' + names[1] + ' like this';
//   } else if (names.length === 3) {
//     text = names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
//   } else if (names.length > 3) {
//     text = names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//   }
//   return text;
// }

// console.log(likes(['Peter', 'Juan', 'Pepe', 'Pedro']));

// const user = {
//   name: 'Carlos',
//   address: { calle: 'C/ Estrella', number: 16, cp: 15003 },
//   age: 28,
//   isAdult: function () {
//     console.log(this);
//     this.saludo();
//     return this.age >= 18;
//   },
//   saludo: function () {
//     console.log('Hola', this.name);
//   },
// };

// console.log(user.isAdult());

// const users = [{ name: 'Juan' }, { name: 'Jose' }, { name: 'Paco' }, { name: 'Ana' }];

// const usersCopy = [...users];

// console.log(users === usersCopy);

// const languages = ['ES', 'GL', 'EN'];

// console.log(languages.indexOf('EN'));
// console.log(languages.reverse());

// let values = ['Ivan', 'Pablo', 'Ana', 'Juan', 'Patricia', 'Firulais'];

// let loQueSacoConSlice = values.slice(1, 4);

// let loQueSaque = values.splice(2, 1);

// console.log(values, loQueSaque, loQueSacoConSlice);

// for (let i = 0; i < values.length; i++) {
//   console.log(values[i]);
// }

// console.log(values.sort());

/*
Quiero hacer una función que admita de parámetro un array de pacientes
La función va a devolver los que están infectados al día siguiente
Pero no modifica el array original (los que estaban infectados originalmente)
Si alguien está infectado, al día siguiente están infectados los que están justo al lado
*/

const pacientes = [true, false, true, false, false, false, true, true];
const infected = [true, true, true, true, false, true, true, true];
const infected2 = [false, true, false, true, false, true, false, false];

function infectadosAlDiaSiguiente(listaPacientes) {
  let result = [...pacientes];
  for (let i = 0; i < listaPacientes.length; i++) {
    if (listaPacientes[i]) {
      if (i > 0) {
        result[i - 1] = true;
      }
      if (i < listaPacientes.length - 1) {
        result[i + 1] = true;
      }
    }
  }
  return result;
}

function infectadosAlDiaSiguiente2(listaPacientes) {
  let result = infectadosAlDiaSiguiente(pacientes);
  for (let i = 0; i < listaPacientes.length; i++) {
    if (listaPacientes[i]) {
      result[i] = false;
    }
  }
  return result;
}

console.log(infectadosAlDiaSiguiente(pacientes));
console.log(infectadosAlDiaSiguiente2(pacientes));

/*
Solución profe problema infectados
Él mira si los sanos tienen un infectado al lado en vez de ir buscando infectados e infectados a los de al lado
*/
function infect(patients) {
  const patientsCopy = [...patients];

  for (let i = 0; i < patientsCopy.length; i++) {
    if (patients[i] === false && (patients[i - 1] || patients[i + 1])) {
      patientsCopy[i] = true;
    }
  }
  return patientsCopy;
}

console.log(infect(pacientes));

// // Transform seconds into HH:MM:SS
// function humanReadable(seconds) {
//   let hh = '00',
//     mm = '00',
//     ss = '00';
//   hh = Math.floor(seconds / 3600);
//   seconds = seconds - hh * 3600;
//   mm = Math.floor(seconds / 60);
//   seconds = seconds - mm * 60;
//   ss = seconds;
//   if (ss !== '00' && ss < 10) {
//     ss = '0' + ss;
//   }
//   if (mm !== '00' && mm < 10) {
//     mm = '0' + mm;
//   }
//   if (hh !== '00' && hh < 10) {
//     hh = '0' + hh;
//   }
//   if (mm === 60) {
//     mm--;
//     ss = 59;
//   }
//   if ((hh === 24 && mm > 0 && ss > 0) || hh === 100) {
//     hh--;
//     mm = 59;
//     ss = 59;
//   }
//   return hh + ':' + mm + ':' + ss;
// }

// humanReadable(3600);
