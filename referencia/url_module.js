// modulo URL


const url = new URL('http://miweb.com:8000/hola.html?id=100&edad=23');

urlData = {
    hash: url.hash,
    host:url.host,  //  incluye el puerto
    hostName:url.hostname,
    href:url.href,
    origen:url.origin,
    pasword:url.password,
    ruta:url.pathname,
    puerto:url.port,
    protocolo:url.protocol,

    busqeda:url.search,
    parametros:url.searchParams,
    usuario:url.username,
    string:url.toString(),
    JSON:url.toJSON(),
}


// añade un parametro a la busqueda
url.searchParams.append('nombre','Miguel');

console.log(urlData);

//recorre los datos
url.searchParams.forEach((value,name)=>{
    console.log(`valor:${value} name:${name}`);
})