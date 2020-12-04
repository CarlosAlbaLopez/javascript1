'use strict';

// // Set timeout
// const timeoutId = setTimeout(() => {
//   console.log('Esto tarda');
// }, 5000);

// clearTimeout(timeoutId);

// console.log('Esto no tarda');

// // setInterval
// const loQueQuieroRepetir = () => {
//   console.log('Esto se repite');
// };

// loQueQuieroRepetir();
// const intervalId = setInterval(loQueQuieroRepetir, 2000);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 4000);

// // then ejecuta cuando se resuelve la promesa
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 5000);
// });

// myPromise.then((value) => {
//   console.log(value);
// });

// const myPromise2 = new Promise((resolve, reject) => {
//   reject('Motivo del fallo');
// });

// myPromise2
//   .then((value) => {
//     console.log(value);
//   })
//   // catch se ejecuta si rechaza la promesa
//   .catch((error) => {
//     console.log(error);
//   })
//   // finally siempre se ejecuta al final pase lo que pase
//   .finally(() => {
//     console.log('Esto se ejecuta siempre y al final');
//   });

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

// const personsWithAnimal = persons.map((person) => {
//   const personCopy = { ...person };
//   const pet = pets.find((pet) => {
//     return person.pet === pet.name;
//   });
//   personCopy.petData = pet;
//   return personCopy;
// });

// const personsWithAnimalData = personsWithAnimal.map((person) => {
//   const personCopy = { ...person };
//   const animal = animals.find((animal) => {
//     return person.petData.animal === animal.name;
//   });
//   personCopy.petData.animalData = animal;
//   return personCopy;
// });

// console.log(personsWithAnimalData);

// const personsWithAnimal = persons.map((person) => {
//   const personCopy = { ...person };
//   const pet = pets.find((pet) => {
//     return person.pet === pet.name;
//   });
//   personCopy.petData = pet;
//   const animal = animals.find((animal) => {
//     return personCopy.petData.animal === animal.name;
//   });
//   personCopy.petData.animalData = animal;

//   return personCopy;
// });

// const totalLegs = personsWithAnimal.reduce((accumulator, person) => {
//   return accumulator + person.petData.animalData.legs;
// }, 0);

// console.log(personsWithAnimal, totalLegs);

/**
 * EJERCICIOS
 */

// Número total de infectados
const numberOfInfected = persons.reduce((accumulator, person) => {
  return person.infected ? accumulator + 1 : accumulator;
}, 0);
console.log('Personas Infectadas', numberOfInfected);

// Número total de sanos
const numberOfHealthy = persons.reduce((accumulator, person) => {
  return !person.infected ? accumulator + 1 : accumulator;
}, 0);
console.log('Personas Sanas', numberOfHealthy);

// Numero total de infectados en los países (del array de países)
const worldNumberOfInfected = countries.reduce((accumulator, country) => {
  return accumulator + country.infected;
}, 0);
console.log('Número total de infectados', worldNumberOfInfected);

// País con más infectados (del array de países)
const countryWithTheMostInfected = countries.reduce((mostInfected, country) => {
  // // Código equivalente al no comentado de la función
  //   if (mostInfected.infected > country.infected) {
  //     return mostInfected;
  //   }
  //   return country;
  return mostInfected.infected > country.infected ? mostInfected : country;
});
console.log('País con más infectados', countryWithTheMostInfected);

// Array con nombre de todas las mascotas
const petsNames = persons.map((person) => {
  return person.pet;
});
console.log('Array nombres mascotas', petsNames);

// Array con las personas infectadas del array de personas
const infectedPeople = persons.filter((person) => {
  return person.infected;
});
console.log('Array personas infectadas', infectedPeople);

// Array de españoles con perro
const EspanolesConPerro = persons
  .filter((person) => {
    return person.country === 'ES';
  })
  .map((person) => {
    const personCopy = { ...person };
    const pet = pets.find((pet) => {
      return person.pet === pet.name;
    });
    personCopy.animal = pet.animal;
    return personCopy;
  })
  .filter((person) => {
    return person.animal === 'perro';
  });
console.log('Españoles con perro', EspanolesConPerro);

// Array con las personas y el objeto de la persona tiene a mayores todos los datos de su mascota
const personsWithAnimal = persons.map((person) => {
  const personCopy = { ...person };
  const pet = pets.find((pet) => {
    return person.pet === pet.name;
  });
  personCopy.petData = pet;
  const animal = animals.find((animal) => {
    return personCopy.petData.animal === animal.name;
  });
  personCopy.petData.animalData = animal;

  return personCopy;
});
console.log('Array personas con datos animales', personsWithAnimal);

// A partir de las personas sacar el animal que tienen más personas como mascota (PENDIENTE)
const mostPopularAnimal = persons
  .map((person) => {
    const personCopy = { ...person };
    const pet = pets.find((pet) => {
      return person.pet === pet.name;
    });
    personCopy.petData = pet;

    return personCopy;
  })
  .reduce((previousPet, currentPet) => {
    return previousPet.petData.name === currentPet.petData.name ? previousPet : currentPet;
  });

console.log('Animal más popular', mostPopularAnimal);

// Número total de patas de las mascotas de las personas
const totalLegs = personsWithAnimal.reduce((accumulator, person) => {
  return accumulator + person.petData.animalData.legs;
}, 0);
console.log('Total de patas de las mascotas de las personas', totalLegs);

// Array con las personas que tienen animales de 4 patas
const peopleWithFourLegsAnimals = personsWithAnimal.filter((person) => {
  return person.petData.animalData.legs === 4;
});
console.log('Personas con animales de 4 patas', peopleWithFourLegsAnimals);

// A partir del string 'España' obtener un array de personas no infectadas de ese país
const notInfectedInSpain = persons
  .map((person) => {
    const personCopy = { ...person };
    const country = countries.find((country) => {
      return person.country === country.code;
    });
    personCopy.countryName = country.name;

    return personCopy;
  })
  .filter((person) => {
    return person.countryName === 'España' && person.infected === false;
  });
console.log('Array de personas no infectadas en España', notInfectedInSpain);

// Array de paises que tienen personas con loros como mascota
const countriesWithParrots = countries
  .map((country) => {
    const countriesCopy = { ...country };
    const person = personsWithAnimal.find((person) => {
      return country.code === person.country && person.petData.animalData.name === 'loro';
    });
    countriesCopy.peopleData = person;

    return countriesCopy;
  })
  .filter((country) => {
    return country.peopleData !== undefined;
  });
console.log('Países con loros', countriesWithParrots);

// Numero de infectados totales (los del objeto del país) de los paises con mascotas de ocho patas
const infectedInCountriesWithEightLegsAnimals = countries
  .map((country) => {
    const countriesCopy = { ...country };
    const person = personsWithAnimal.find((person) => {
      return person.petData.animalData.legs === 8 && country.code === person.country;
    });
    countriesCopy.peopleData = person;

    return countriesCopy;
  })
  .filter((country) => {
    return country.peopleData !== undefined;
  })
  .map((country) => {
    return country.infected;
  });
console.log(infectedInCountriesWithEightLegsAnimals);
