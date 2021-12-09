module.exports = class Persona {
    constructor(nombre, edad){
        this.nombre=nombre;
        this.edad = edad;
    }

    saludar(){
        return `hola, me llamo ${this.nombre} tengo ${this.edad} años`;
    }
}
