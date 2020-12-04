'use strict';

// // CLASSES
// class Rectangle {
//   width = 0;
//   height = 0;

//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   getArea() {
//     return this.width * this.height;
//   }

//   getPerimeter() {
//     return this.width * 2 + this.height * 2;
//   }
// }

// const myRectangle = new Rectangle(9, 5);
// const myRectangle2 = new Rectangle(10, 8);

// console.log(myRectangle instanceof Rectangle);
// console.log(myRectangle instanceof Array);
// console.log(myRectangle instanceof Object);
// console.log(myRectangle.getArea());
// console.log(myRectangle2.getArea());
// console.log(myRectangle.getPerimeter());
// console.log(myRectangle2.getPerimeter());

/*
  Vamos a hacer dos classes una para representar zorros y otra para representar gallinas
  Vamos a tener una clase más que representa una granja

  Cuando construimos la granja le pasamos siempre un array de dos animales
  los animales pueden ser zorros o gallinas

  Cuando paso dos gallinas o dos zorros y cierro la puerta de la granja este metodo me devuelve
  tres gallinas o tres zorros respectivamente. Los animales originales siguen, pero el que han criado
  es una nueva referencia.

  Cuando paso un zorro y una gallina o una gallina y un zorro, al cerrar la puerta el metodo me 
  devuelve solo un zorro. Tiene que ser el mismo zorro que ha entrado.

  El metodo de cerrar la puerta siempre devuelve un array

  Metodos que van a tener las clases:
  -Constructor - Todas
  -Criar - zorros y gallinas
  -Comer - zorros y admite de parametro un array de animales
  -Cerrar puerta - Solo la granja
  */

// // TODA LA LÓGICA EN CLOSE DOOR
// class Granja {
//   animales;
//   constructor(animales) {
//     this.animales = animales;
//   }

//   closeDoor() {
//     if (this.animales.every((animales) => animales instanceof Gallina)) {
//       this.animales.push(new Gallina());
//       return this.animales;
//     } else if (this.animales.every((animales) => animales instanceof Zorro)) {
//       this.animales.push(new Zorro());
//       return this.animales;
//     } else {
//       return this.animales.find((animales) => animales instanceof Zorro);
//     }
//   }
// }

// class Zorro {
//   criar() {}
//   comer(animales) {}
// }

// class Gallina {
//   criar() {}
// }

// const animales = [new Zorro(), new Zorro()];

// const miGranja = new Granja(animales);

// console.log('Animales que entran', miGranja.animales);

// console.log('Después de cerrar puerta', miGranja.closeDoor());

// // LOGICA DIVIDIDA EN CADA CLASE
// class Granja {
//   animales;
//   constructor(animales) {
//     this.animales = animales;
//   }

//   closeDoor() {
//     if (this.animales.every((animales) => animales instanceof Gallina)) {
//       animales[0].criar();
//     } else if (this.animales.every((animales) => animales instanceof Zorro)) {
//       animales[0].criar();
//     } else {
//       if (this.animales[0] instanceof Zorro) {
//         return this.animales[0].comer(animales);
//       } else {
//         return this.animales[1].comer(animales);
//       }
//     }
//     return this.animales;
//   }
// }

// class Zorro {
//   criar() {
//     miGranja.animales.push(new Zorro());
//     return miGranja.animales;
//   }
//   comer(animales) {
//     return animales.filter((animal) => animal instanceof Zorro);
//   }
// }

// class Gallina {
//   criar() {
//     miGranja.animales.push(new Gallina());
//     return miGranja.animales;
//   }
// }

// const animales = [new Zorro(), new Gallina()];

// const miGranja = new Granja(animales);

// console.log('Animales que entran', miGranja.animales);

// console.log('Después de cerrar puerta', miGranja.closeDoor());

// SOLUCION PROFE
class Zorro {
  criar() {
    return new Zorro();
  }
  comer(animales) {
    return animales.filter((animal) => animal instanceof Zorro);
  }
}

class Gallina {
  criar() {
    return new Gallina();
  }
}

class Granja {
  #animales;

  constructor(animales) {
    this.#animales = animales;
  }

  closeDoor() {
    const todosZorros = this.#animales.every((animal) => {
      return animal instanceof Zorro;
    });
    const todosGallinas = this.#animales.every((animal) => {
      return animal instanceof Gallina;
    });
    if (todosGallinas || todosZorros) {
      const newAnimal = this.#animales[0].criar();
      this.#animales.push(newAnimal);
    } else {
      const elZorro = this.#animales.find((animal) => {
        return animal instanceof Zorro;
      });
      this.#animales = elZorro.comer(this.#animales);
    }
    return this.#animales;
  }
}

const animales = [new Zorro(), new Gallina()];

const miGranja = new Granja(animales);

console.log('Animales que entran', miGranja);

console.log('Después de cerrar puerta', miGranja.closeDoor());
