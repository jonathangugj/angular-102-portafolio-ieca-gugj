let message: string | null = "Hola typescript";

let count:number = 42;
let isDone:boolean  = false;


function saludo(name:string) : string {
    return `Hola ${name}`;
}

console.log(saludo("jonathan"));

class Animal {
    public nombre: string;
    private anios: number;
    protected reino: string;

    constructor(nombre: string, anios: number){
        this.nombre = nombre;
        this.anios = anios;
        this.reino = "Animal";
    }
}

class Perro extends Animal {
    constructor(nombre: string, anios: number) {
        super(nombre,anios);
    }

    sonido(): void {
        console.log(`${this.nombre} es un perro, ladra y pertence al reino ${this.reino}`);
    }
}

interface Shape {
    name: string;
    area(): number;
    alias?: string; // opcional en la clase que implemente con el ?
}

class Circulo implements Shape {
    constructor(public radius: number, public name:string){}

    area(): number {
        return Math.PI * this.radius ** 2;
    }

}

const circulo = new Circulo(5, "prueba");

console.log(circulo.area());

const perro = new Perro("Rocket", 5);

console.log(perro.nombre);