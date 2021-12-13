const EventEmitter = require('events');

// Se trata de una clase de la que podemos usar para nuestros eventos

class MyEmiter extends EventEmitter{}

const myEmiter = new MyEmiter();

myEmiter.on('myEvento',() => console.log('Evento recibido'));
myEmiter.on('tuEvento',(param1,param2) => console.log('Evento recibido: ',param1," , ",param2));

myEmiter.emit('myEvento');
myEmiter.emit('myEvento');
myEmiter.emit('tuEvento',"Primer argumento", "valor del segundo");
myEmiter.emit('myEvento');

myEmiter.on('newListener', (event, listener) => {
    console.log("Se ha añadido un evento");
  });

myEmiter.addListener('pepe',()=>console.log('hola',2+2));
myEmiter.emit('pepe');