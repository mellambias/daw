const path = require('path');

// Parametros disponibles a nivel de módulo
const rutaArchivoActual= __filename;
const rutaDirectorioActual = __dirname;
const objetoRequire = require;

/**
 * https://nodejs.org/api/path.html
 */

const nombreArchivo = path.basename(rutaArchivoActual);

// obtiene la extension del archivo dada una ruta al archivo o su nombre
const extensionArchivo = path.extname(rutaArchivoActual);
//const extensionArchivo = path.extname(nombreArchivo);

// JSON con el desglose de la ruta
const data = path.parse(rutaArchivoActual);

// composicion de rutas dinamicas 

const ruta = path.join(rutaDirectorioActual,"test","hello.html");



console.log(ruta);