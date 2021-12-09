const animales = require ('./animales.js')
const cowsay = require('cowsay'); // las dependencia locales "node_modules"
const Persona = require('./Persona');

// al recibir un JSON se puede desestructurar
// {animales, color} = require ('./animales.js')

animales.animales.forEach(animal=>{
    console.log(animal);
})

console.log(cowsay.say({
    text : "Soy una vaca, cualquiera",
    e : "{}",
    T : " U"
}));

const persona1 = new Persona("Miguel", 54);
const persona2 = new Persona("Rocio", 42);

console.log(persona1.saludar());
console.log(persona2.saludar());