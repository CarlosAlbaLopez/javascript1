'use strict';

// const user = { name: 'Ivan', age: 53, address: { street: 'C/ Real', number: 12 } };
// // Stringify convierte un objeto a texto
// const userStringified = JSON.stringify(user);
// // Parse convierte un texto a objeto
// const parsedUser = JSON.parse(userStringified);
// console.log(user, userStringified, parsedUser);

// // A una estructura de datos con alguna referencia cíclica no se le puede aplicar Stringify
// const ciclico = {};
// ciclico.referenciaCircular = ciclico;
// console.log(ciclico);

// // PRIMERA LLAMADA A UNA API!!!
const url = 'https://anapioficeandfire.com/api/characters/583';

// // Fetch devuelve una promesa a partir de una url
// fetch(url);

// // Con el primer then obtenemos la respuesta del servidor que es otra promesa
// // y el segundo then nos devuelve el valor o dato que ha reunido el servidor
// fetch(url).then((response) => {
//   response.json().then((value) => {
//     console.log(value);
//   });
// });
// // Podemos guardar la promesa que nos devuelve la api en una variable (esto es lo mismo que lo de arriba)
// fetch(url).then((response) => {
//   const valuePromise = response.json();
//   valuePromise.then((value) => {
//     console.log(value);
//   });
// });
// // Podemos devolver el valor de la promesa del json (esto también es lo mismo)
// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((value) => {
//     console.log(value);
//   });

// // Podemos sacar datos concretos como p.ej. los aliases de John Snow
// fetch(url).then((response) => {
//   response.json().then((value) => {
//     for (const alias of value.aliases) {
//       console.log(alias);
//     }
//   });
// });

// // Puedo guardar la promesa del json en una función...
// function fetchData(url) {
//   return fetch(url).then((response) => {
//     return response.json();
//   });
// }
// // ...para llamarla después en otras partes del código
// fetchData(url).then((value) => {
//   console.log(value);
// });

// async function getJohnSnow() {
//   //   fetchData(url).then((value) => {
//   //     console.log(value);
//   //   });

//   // hacer lo que está comentado arriba sin el then (añadiendo async a la función + el siguiente código)
//   const data = await fetchData(url);
//   console.log(data);
// }

// getJohnSnow();

// async function getOtherJohnSnow() {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);

//   const dataEnUnPaso = await (await fetch(url)).json();
//   console.log(dataEnUnPaso);
// }

// getOtherJohnSnow();

// async function getPeople() {
//   const url = 'https://anapioficeandfire.com/api/characters/';
//   const people = [];

//   for (let i = 1; i < 6; i++) {
//     const person = await (await fetch(url + i)).json();
//     people.push(person);
//   }
//   console.log(people);
// }

// getPeople();

// async function getPeople2() {
//   const url = 'https://anapioficeandfire.com/api/characters/';
//   const peoplePromise = [];

//   for (let i = 1; i < 6; i++) {
//     peoplePromise.push((await fetch(url + i)).json());
//   }
//   const people = await Promise.all(peoplePromise);
//   console.log(people);
// }

// getPeople2();

// async function getPeople() {
//   const url = 'https://anapioficeandfire.com/api/characters/';
//   const peoplePromise = [];

//   for (let i = 1; i < 6; i++) {
//     peoplePromise.push((await fetch(url + i)).json());
//   }
//   const people = await Promise.race(peoplePromise);
//   console.log(people);
// }

// getPeople();

/*
Recuperar los datos de la casa Targaryen de juego de la API de Game of Thrones, de esta casa deberemos averiguar cual es
el Lord actual (almacenado en currentLord) y recuperar sus datos, los del lord.
Del lord actual debemos sacar por la consola el nombre (name), y los titulos (titles) cada uno en una linea por consola.
Enlace para hacer fetch https://www.anapioficeandfire.com/api/houses/378
*/
async function getTargaryanHouse() {
  const url = 'https://www.anapioficeandfire.com/api/houses/378';
  const houseData = await (await fetch(url)).json();
  console.log(houseData);

  const currentLordUrl = houseData.currentLord;
  const currentLordData = await (await fetch(currentLordUrl)).json();
  console.log(currentLordData);

  console.log(currentLordData.name);

  for (let i = 0; i < currentLordData.titles.length; i++) {
    console.log(currentLordData.titles[i]);
  }
}

getTargaryanHouse();
