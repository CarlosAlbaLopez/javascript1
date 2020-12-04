'use strict';

// // Buscar Anagramas Kata exersice
// function anagrams(word, words) {
//   let orderedWord = word.split('').sort();
//   let coincidences = [];

//   for (let i = 0; i < words.length; i++) {
//     let preparedForComparison = words[i].split('').sort();

//     if (JSON.stringify(preparedForComparison) === JSON.stringify(orderedWord)) {
//       coincidences.push(words[i]);
//     }
//   }
//   return coincidences;
// }

// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

// // Map
// const users = [
//   { name: 'Ana', age: 10 },
//   { name: 'Lucía', age: 20 },
//   { name: 'Rocío Piso', age: 30 },
//   { name: 'Ivan', age: 11 },
//   { name: 'Jose', age: 29 },
// ];

// // La siguiente constante (usando map) y la siguiente función son equivalentes
// const edades = users.map((user) => user.age);

// function edadesLiandome(users) {
//   const result = [];
//   for (let i = 0; i < users.length; i++) {
//     result.push(users[i].age);
//   }
//   return result;
// }

// console.log(edades);
// console.log(edadesLiandome(users));

// /*
// Las siguientes dos constantes son equivalentes (ambas son copias poco profundas de users y si modificas una
//     modificas la otra). La tercera constante también es poco profunda pero la referencia principal el distinta
//     por lo que si modificas esta última en algún valor del primer nivel no afecta al resto.
// */
// const usersCopy = [...users];
// const usersCopyConMap = users.map((user) => {
//   return user;
// });

// const usersCopyConMapConDistintaReferencia = users.map((user) => {
//   return { ...user };
// });

// usersCopyConMapConDistintaReferencia[0].age = 99999;

// console.log((users, usersCopy, usersCopyConMap, usersCopyConMapConDistintaReferencia));

// const adults = users.filter((user) => {
//   return user.age >= 18;
// });

// console.log(adults);

// const sumaEdades = users.reduce((accumulator, user) => {
//   return accumulator + user.age;
// }, 0);

// console.log(sumaEdades);

// const adultUsers = users.filter((user) => {
//   return user.age >= 18;
// });

// const userAges = adultUsers.map((user) => {
//   return user.age;
// });

// const sumaEdadesAdultos = userAges.reduce((accumulator, age) => {
//   return accumulator + age;
// }, 0);

// console.log(sumaEdadesAdultos);

// const sumaDeEdadesAdultos = users
//   .filter((user) => {
//     return user.age >= 18;
//   })
//   .map((user) => {
//     return user.age;
//   })
//   .reduce((accumlator, age) => {
//     return accumlator + age;
//   }, 0);

// console.log(sumaDeEdadesAdultos);

// const desordenado = [891, 519, 11, 564, 98, 465, 151, 984, 81, 654, 21, 5, 46, 45, 645, 6];
// const ordenado = [];
// console.log('ARRAY ORIGINAL', desordenado);

// function findSmallest(arrayDesordenado) {
//   let elMasPequeno;

//   if (arrayDesordenado.length === 1) {
//     ordenado.push(arrayDesordenado[0]);
//     return ordenado;
//   }

//   for (let i = 0; i < arrayDesordenado.length; i++) {
//     let resta = 0;
//     for (let j = 0; j < arrayDesordenado.length; j++) {
//       if (arrayDesordenado[i] - arrayDesordenado[j] > resta) {
//         resta = arrayDesordenado[i] - arrayDesordenado[j];
//         elMasPequeno = arrayDesordenado[j];
//       }
//     }
//   }

//   const arrayWithoutSmallest = arrayDesordenado.filter((myArray) => {
//     return myArray > elMasPequeno;
//   });

//   ordenado.push(elMasPequeno);

//   return findSmallest(arrayWithoutSmallest);
// }

// console.log('ARRAY ORDENADO CON RESTA', findSmallest(desordenado));

// function ordenarArray(arrayDesordenado, indiceVariable) {
//   for (let i = 0; i < arrayDesordenado.length; i++) {
//     if (arrayDesordenado[indiceVariable] < arrayDesordenado[i]) {
//       let numeroParaRecolocar = arrayDesordenado[i];
//       arrayDesordenado.splice(i, 1, arrayDesordenado[indiceVariable]);
//       arrayDesordenado.splice(indiceVariable, 1, numeroParaRecolocar);
//     }
//   }
//   return arrayDesordenado;
// }

// function ordenar(arrayDesordenado) {
//   for (let i = 1; i < arrayDesordenado.length; i++) {
//     ordenarArray(arrayDesordenado, i);
//   }
//   return arrayDesordenado;
// }

// console.log('ARRAY ORDENADO CON SUSTITUCION', ordenar(desordenado));

// function ordenarBurbuja(arrayDesordenado) {
//   if (isSorted(arrayDesordenado) === false) {
//     for (let i = 0; i < arrayDesordenado.length; i++) {
//       if (arrayDesordenado[i] > arrayDesordenado[i + 1]) {
//         let numeroParaRecolocar = arrayDesordenado[i + 1];
//         arrayDesordenado.splice(i + 1, 1, arrayDesordenado[i]);
//         arrayDesordenado.splice(i, 1, numeroParaRecolocar);
//         // console.log(arrayDesordenado);
//       }
//     }
//     ordenarBurbuja(arrayDesordenado);
//   }
//   return arrayDesordenado;
// }

// function isSorted(items) {
//   for (let i = 0; i < items.length; i++) {
//     if (items[i] > items[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log('ARRAY ORDENADO CON BURBUJA', ordenarBurbuja(desordenado));

// Suma de Intervalos Kata exercise
function sumIntervals(intervals) {
  intervals = checkOverlapsMax(intervals);
  let result = 0;
  for (let i = 0; i < intervals.length; i++) {
    result += intervals[i][1] - intervals[i][0];
  }
  return result;
}

// El problema es como se las carga peta el array al iterarlo de nuevo

function checkOverlapsMin(intervals) {
  if (intervals.length > 0) {
    for (let i = 0; i < intervals.length; i++) {
      for (let j = 0; j < intervals.length; j++) {
        if (j !== i) {
          if (intervals[i][0] >= intervals[j][0] && intervals[i][0] <= intervals[j][1]) {
            intervals[i][0] = intervals[j][0];
            if (intervals[i][1] < intervals[j][1]) {
              intervals[i][1] = intervals[j][1];
            }
            intervals.splice(j, 1);
          }
        }
      }
    }
  }
  return intervals;
}

function checkOverlapsMax(intervals) {
  intervals = checkOverlapsMin(intervals);
  if (intervals.length > 0) {
    for (let i = 0; i < intervals.length; i++) {
      for (let j = 0; j < intervals.length; j++) {
        if (j !== i) {
          if (intervals[i][1] >= intervals[j][0] && intervals[i][1] <= intervals[j][1]) {
            intervals[i][1] = intervals[j][1];
            if (intervals[i][0] > intervals[j][0]) {
              intervals[i][0] = intervals[j][0];
            }
            intervals.splice(j, 1);
          }
        }
      }
    }
  }

  return intervals;
}

console.log(
  sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
  ])
);
