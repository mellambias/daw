const http = require('http')
const fs = require('fs');

// crear un servidor web

const server = http.createServer((req,res)=>{
    // Respuesta del servidor (res) al recibir una peticion (req)
/*     res.write("hello world from Node.js");
    res.end(); */

    // usar res como stream de salida usando pipe.
    const myReadStream = fs.createReadStream("data.txt","utf-8");
    res.writeHead(200,{"Content-type": "text/plain"});
    myReadStream.pipe(res); // Conectamos la salida de lectura al stream de respuesta
})
//console.log(server);
server.listen(5000,()=> console.log('Servidor escuchando en el 5000'));