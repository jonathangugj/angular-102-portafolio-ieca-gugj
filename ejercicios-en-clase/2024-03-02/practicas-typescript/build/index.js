"use strict";
let message = "Hola typescript";
let count = 42;
let isDone = false;
function saludo(name) {
    return `Hola ${name}`;
}
console.log(saludo("jonathan"));
class Animal {
    constructor(nombre, anios) {
        this.nombre = nombre;
        this.anios = anios;
        this.reino = "Animal";
    }
}
class Perro extends Animal {
    constructor(nombre, anios) {
        super(nombre, anios);
    }
    sonido() {
        console.log(`${this.nombre} es un perro, ladra y pertence al reino ${this.reino}`);
    }
}
class Circulo {
    constructor(radius, name) {
        this.radius = radius;
        this.name = name;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}
const circulo = new Circulo(5, "prueba");
console.log(circulo.area());
const perro = new Perro("Rocket", 5);
console.log(perro.nombre);
