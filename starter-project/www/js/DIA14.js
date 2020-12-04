'use strict';

// const user = {
//   age: 89,
//   sayAge: function () {
//     setTimeout(() => {
//       console.log(this.age);
//     }, 1000);
//   },
// };

// user.sayAge();

// class User {
//   name;
//   #creditCard;

//   constructor(name, creditCard) {
//     this.name = name;
//     this.#creditCard = creditCard;
//   }

//   darTarjeta() {
//     return this.#creditCard;
//   }

//   cambiarTarjeta(numeroDeTarjeta) {
//     // Aquí comprobaciones
//     this.#creditCard = numeroDeTarjeta;
//   }

//   static hacerUsuarios(names, cards) {
//     const users = names.map((name, index) => {
//       return new User(name, cards[index]);
//     });
//     return users;
//   }
// }

// const names = ['Ivan', 'Lucía', 'Ana'];
// const cards = ['1', '2', '3'];

// const myUsers = User.hacerUsuarios(names, cards);
// console.log(myUsers);

// const myUser = new User('Ivan', '1111222233334444');

// console.log(myUser.darTarjeta());

/*
  Vamos a crear un ecommerce

  Por un lado tenemos los usuarios, que van a estar representados por una clase
  Solo voy a necesitar una instancia de un usuario.
  El usuario tiene un carrito que es privado, el carrito es un array.
  En el array el usuario va metiendo items
  El usuario va a tener un metodo de añadir al carrito, porque no puedo modificarlo desde fuera,
  añadir al carrito recibe un item como parametro.
  Tambien tiene un metodo pagar que devuelve el carrito para poder pasarlo a la tienda y que emita la
  factura

  Voy a tener una clase Item. Los items los voy a generar a partir de los datos de abajo.

  Voy a tener una tienda representada con su clase.
  Va a tener un metodo comprar, que recibe el carrito de usuario
  El metodo de comprar saca por la consola la factura
  cada linea de la factura tiene el nombre del articulo, las unidades, el precio por unidad y el 
  precio de las unidades de esa linea.
  La ultima linea saca el total de todo el carrito
*/
const itemNames = ['Camisa', 'Pantalon', 'Calcetines'];
const itemPrices = [13, 27, 100];

class User {
  name;
  #cart;

  constructor(name, cart) {
    this.name = name;
    this.#cart = cart;
  }

  addToCart(item) {
    if (this.#cart.find((article) => article.name === item.name)) {
      let itemIndex = this.#cart.findIndex((article) => article.name === item.name);
      this.#cart[itemIndex].ammount++;
    } else {
      this.#cart.push(item);
    }
  }

  pay() {
    return this.#cart;
  }
}

class Item {
  name;
  price;
  ammount;

  constructor(name, price, ammount) {
    this.name = name;
    this.price = price;
    this.ammount = ammount;
  }

  static createItems(names, prices, ammount) {
    const items = names.map((name, index) => {
      return new Item(name, prices[index], ammount);
    });
    return items;
  }
}

class Store {
  static buy(cart) {
    let totalCart = 0;
    for (let i = 0; i < cart.length; i++) {
      console.log(
        'Item',
        i + 1,
        ':',
        cart[i].name,
        '- unidades:',
        cart[i].ammount,
        '- precio:',
        cart[i].price,
        '- total:',
        cart[i].price * cart[i].ammount
      );
      totalCart += cart[i].price * cart[i].ammount;
    }
    console.log('Total Factura', totalCart, '€');
  }
}

const myUser = new User('Carlos', []);
const myItems = Item.createItems(itemNames, itemPrices, 1);

myUser.addToCart(myItems[0]);
myUser.addToCart(myItems[1]);
myUser.addToCart(myItems[1]);
myUser.addToCart(myItems[1]);
myUser.addToCart(myItems[2]);
myUser.addToCart(myItems[2]);
Store.buy(myUser.pay());
