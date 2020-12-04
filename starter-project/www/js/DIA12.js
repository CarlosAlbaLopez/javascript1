'use strict';

const persons = [
  {
    name: 'Pedro',
    age: 35,
    country: 'ES',
    infected: true,
    pet: 'Troski',
  },
  {
    name: 'Elisabeth',
    age: 14,
    country: 'UK',
    infected: true,
    pet: 'Firulais',
  },
  {
    name: 'Pablo',
    age: 25,
    country: 'ES',
    infected: false,
    pet: 'Berritxu',
  },
  {
    name: 'Angela',
    age: 18,
    country: 'DE',
    infected: false,
    pet: 'Noodle',
  },
  {
    name: 'Boris',
    age: 50,
    country: 'UK',
    infected: true,
    pet: 'Leon',
  },
  {
    name: 'Donald',
    age: 69,
    country: 'US',
    infected: false,
    pet: 'Pence',
  },
];

const pets = [
  {
    name: 'Troski',
    animal: 'perro',
  },
  {
    name: 'Firulais',
    animal: 'perro',
  },
  {
    name: 'Berritxu',
    animal: 'loro',
  },
  {
    name: 'Noodle',
    animal: 'araña',
  },
  {
    name: 'Leon',
    animal: 'gato',
  },
  {
    name: 'Pence',
    animal: 'perro',
  },
];

const animals = [
  {
    name: 'perro',
    legs: 4,
  },
  {
    name: 'araña',
    legs: 8,
  },
  {
    name: 'gato',
    legs: 4,
  },
  {
    name: 'loro',
    legs: 2,
  },
  {
    name: 'gallina',
    legs: 2,
  },
];

// Población en millones
const countries = [
  {
    code: 'CN',
    name: 'China',
    population: 1439,
    infected: 81999,
  },
  {
    code: 'US',
    name: 'Estados Unidos',
    population: 331,
    infected: 112468,
  },
  {
    code: 'DE',
    name: 'Alemania',
    population: 83,
    infected: 56202,
  },
  {
    code: 'ES',
    name: 'España',
    population: 46,
    infected: 72248,
  },
  {
    code: 'UK',
    name: 'Reino Unido',
    population: 67,
    infected: 17301,
  },
];

/**
 * EJERCICIOS
 */

// Número total de infectados
const infectados = persons.filter((person) => person.infected);
// console.log('Nº de infectados', infectados.length);

// Array con las personas y el objeto de la persona tiene a mayores todos los datos de su mascota
const personWithAnimal = persons.map((person) => {
  const personCopy = { ...person };

  const foundPet = pets.find((pet) => pet.name === personCopy.pet);

  if (foundPet) {
    personCopy.animalPet = foundPet.animal;
  }

  return personCopy;
});
// console.log('Array personas con datos mascota', personWithAnimal);

// A partir de las personas sacar el animal que tienen más personas como mascota
const mostPopularPet = personWithAnimal
  .reduce((stats, person) => {
    const foundAnimal = stats.find((stat) => stat.animal === person.animalPet);
    if (foundAnimal) {
      foundAnimal.ammount++;
    } else {
      stats.push({ animal: person.animalPet, ammount: 1 });
    }

    return stats;
  }, [])
  .reduce((mostLoved, stat) => {
    return mostLoved.ammount > stat.ammount ? mostLoved : stat;
  });
// console.log('Mascota más popular', mostPopularPet);

// Otra forma de hacer el anterior pero a partir del array de animales
const mostLovedPet = animals
  .map((animal) => {
    const animalCopy = { ...animal };

    animalCopy.ammount = pets.filter((pet) => pet.animal === animal.name).length;

    return animalCopy;
  })
  .reduce((mostLoved, animal) => {
    return mostLoved.ammount > animal.ammount ? mostLoved : animal;
  });
// console.log('Mascota más popular opcion 2', mostLovedPet);

// Checkear si están todos sanos
const allHealthy = persons.every((person) => !person.infected);
// console.log('¿Están todos sanos?', allHealthy);

/*
Recuperar los datos de la casa Targaryen de juego de la API de Game of Thrones, de esta casa deberemos averiguar cual es
el Lord actual (almacenado en currentLord) y recuperar sus datos, los del lord.
Del lord actual debemos sacar por la consola el nombre (name), y los titulos (titles) cada uno en una linea por consola.
Enlace para hacer fetch https://www.anapioficeandfire.com/api/houses/378
*/
const url = 'https://www.anapioficeandfire.com/api/houses/378';

// fetch(url)
//   .then((response) => response.json())
//   .then((house) => {
//     console.log(house);
//     fetch(house.currentLord)
//       .then((response) => response.json())
//       .then((lord) => {
//         console.log(lord.name);
//         for (const title of lord.titles) {
//           console.log(title);
//         }
//       });
//   });

async function getLordFromHouse(url) {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((house) => {
  //       console.log(house);
  //       fetch(house.currentLord)
  //         .then((response) => response.json())
  //         .then((lord) => {
  //           console.log(lord.name);
  //           for (const title of lord.titles) {
  //             console.log(title);
  //           }
  //         });
  //     });

  //   const houseResponse = await fetch(url);
  //   const house = await houseResponse.json();
  //   const lordResponse = await fetch(house.currentLord);
  //   const lord = await lordResponse.json();
  //   console.log(lord.name);
  //   for (const title of lord.titles) {
  //     console.log(title);
  //   }

  const house = await (await fetch(url)).json();
  const lord = await (await fetch(house.currentLord)).json();

  printLordData(lord);
}

function printLordData(lord) {
  console.log(lord.name);
  for (const title of lord.titles) {
    console.log(title);
  }
}

// getLordFromHouse(url);

// // InmediatelyInvokedFunctionExpression
// (function () {
//   console.log('HOLA');
// })();

// (function (a, b) {
//   console.log(a + b);
// })(4, 5);

// // Date
// let today = new Date();
// let birthday = new Date('February 14, 1988 04:27:16');
// let birthday2 = new Date('1995-4-8, 04:27:10');
// console.log(today);
// console.log(birthday);
// console.log(birthday2);

// // ned Date() y Date.now() son 2 formas de hacer lo mismo
// const start = new Date();
// getLordFromHouse(url);
// const end = Date.now();
// // Medir la diferencia para comprobar cuanto tarda el código entre start y end
// const loQueTarda = end - start;
// console.log(loQueTarda);

// // try catch intenta ejecutar un código y captura el error si lo hay, permite que siga ejecutándose el resto del código
// const test = {};
// try {
//   console.log(test.apply.b);
// } catch (error) {
//   console.error(error);
// }

// let age = 227;
// try {
//   if (age > 130) {
//     throw 'Anda que no eres viejo amigo';
//   }
// } catch (error) {
//   console.error(error);
//   age = 130;
// }
// console.log('age =', age);

// // Asignación por destructuring
// const userData = ['Ivan', 'Palleiro', 'Perez'];
// const [firstName, lastName, lastName2] = userData;
// console.log(firstName, lastName, lastName2);
// const [nombre, , segundoApellido] = userData;
// console.log(nombre, segundoApellido);

// const users = ['Ana', 'Lucia', 'Rocio', 'Juan', 'Antonio'];
// const [unUser, ...restoDeUsuarios] = users;
// console.log(unUser, restoDeUsuarios, users);

// const userData2 = ['Ivan'];
// const [firstName = 'Sin nombre', middleName = 'Sin primer apellido', lastName = 'Sin segundo apellido'] = userData2;
// console.log(firstName, middleName, lastName);

// // Al referirnos mediante la clave (city) podemos omitir el orden de los datos al hacer el destructuring
// const user = { name: 'Ivan', city: 'La Coru', pet: 'perro' };
// const { city, ...restoDelObjeto } = user;
// console.log(city, restoDelObjeto, user);

// function printUserData({ name, pet, ...resto }, age = 0) {
//   console.log(name, pet, resto, age);
// }
// printUserData(user, 28);
