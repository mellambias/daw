const Logger = require("./Logger");

const logger = new Logger();

// cuando recibe el evento alerta lo envia a la consola
logger.on('alerta', (data) => console.log("id: (",data.id,") mensaje: ",data.msg));

// llama al metodo log de la clase, que a su vez emite un evento alerta con un uuid y un mensaje
logger.log("datos enviados");
logger.log("valor data");