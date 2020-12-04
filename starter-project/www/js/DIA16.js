'use strict';

// const test1 = { a: 1 };
// const test2 = { a: 2 };

// const merge = { ...test1, ...test2 };
// console.log(merge);

// const peisano = {
//   name: 'Willy',
//   eyeColor: 'azul',
//   height: 'bajo',
//   tattooed: true,
//   tip: {
//     height: 'alto',
//   },
// };

// for (const key in peisano) {
//   console.log(key);
//   console.log(peisano[key]);
// }

// console.log('---------------------');

// const keys = Object.keys(peisano);
// for (const key of keys) {
//   console.log(key);
//   console.log(peisano[key]);
// }

/*
  Vamos a tener una clase que describe a los sospechosos.
  Cada instancia almacena los datos fisicos de un sospechoso.
  Cada sospechoso tiene un dato de la persona culpable
  Nadie miente
  El tip es privado, para que confiese necesitaremos un método

  Vamos a tener una clase detective
  El detective va a tener un método para investigar
  El metodo de investigar recibe un array de sospechosos
  Y devuelve al único culpable que hay
  OPCIONAL: Podeis ponerle datos personales si quereis pero no es obligatorio. Podeis implementar
  una clase persona de la que heredan el detective y los sospechosos.
*/

// Con estos datos vais a tener que montar las instancias
const names = ['Willy', 'Ivan', 'Ramiro'];
const eyeColor = ['azul', 'marron', 'azul'];
const height = ['bajo', 'alto', 'alto'];
const tattooed = [true, false, false];
const tip = [
  {
    height: 'alto',
  },
  {
    eyeColor: 'marron',
  },
  {
    tattooed: false,
  },
];

class Suspect {
  name;
  eyeColor;
  height;
  tattooed;
  #tip;
  constructor(name, eyeColor, height, tattooed, tip) {
    this.name = name;
    this.eyeColor = eyeColor;
    this.height = height;
    this.tattooed = tattooed;
    this.#tip = tip;
  }

  static createSuspects(names) {
    const suspects = names.map((name, index) => {
      return new Suspect(name, eyeColor[index], height[index], tattooed[index], tip[index]);
    });
    return suspects;
  }

  confess() {
    return this.#tip;
  }
}

class Detective {
  investigate(suspects) {
    let confessions = [];

    for (let i = 0; i < suspects.length; i++) {
      confessions.push(suspects[i].confess());
    }

    for (let i = 0; i < suspects.length; i++) {
      let suspect = suspects[i];

      for (let j = 0; j < Object.keys(suspect).length; j++) {
        for (let k = 0; k < confessions.length; k++) {
          if (Object.keys(confessions[k])[0] === Object.keys(suspect)[j]) {
            if (Object.values(confessions[k])[0] !== Object.values(suspect)[j]) {
              suspect.guilty = false;
            }
          }
        }
      }
    }
    return suspects.find((suspect) => suspect.guilty !== false);
  }
}

const mySuspects = Suspect.createSuspects(names, eyeColor, height, tattooed, tip);
const myDetective = new Detective();

console.log(myDetective.investigate(mySuspects));
