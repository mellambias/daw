const http = require('http')

// crear un servidor web

const server = http.createServer((req,res)=>{
    // Respuesta del servidor (res) al recibir una peticion (req)
    res.write("hello world from Node.js");
    res.end();
})
//console.log(server);
server.listen(5000,()=> console.log('Servidor escuchando en el 5000'));