var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var message = "Hola typescript";
var count = 42;
var isDone = false;
function saludo(name) {
    return "Hola ".concat(name);
}
console.log(saludo("jonathan"));
var Animal = /** @class */ (function () {
    function Animal(nombre, anios) {
        this.nombre = nombre;
        this.anios = anios;
        this.reino = "Animal";
    }
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(nombre, anios) {
        return _super.call(this, nombre, anios) || this;
    }
    Perro.prototype.sonido = function () {
        console.log("".concat(this.nombre, " es un perro, ladra y pertence al reino ").concat(this.reino));
    };
    return Perro;
}(Animal));
var Circulo = /** @class */ (function () {
    function Circulo(radius, name) {
        this.radius = radius;
        this.name = name;
    }
    Circulo.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circulo;
}());
var circulo = new Circulo(5, "prueba");
console.log(circulo.area());
var perro = new Perro("Rocket", 5);
console.log(perro.nombre);
