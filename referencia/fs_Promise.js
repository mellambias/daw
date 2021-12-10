const fs = require('fs/promises');
const path = require('path');


/**
 * Gestion de archivos
 */

// metodos sincronos bloquean el proceso hasta que se completan
// metodos asincronos no bloquean y llaman a un callback al finalizar

// crear un directorio
// para crear recursivamente carpetas usamos la propiedad {recursive:false|true} true

 (async function(){
     try{
            await fs.stat(path.join(__dirname, 'directorio'))
            .catch(()=>{fs.mkdir(path.join(__dirname,"directorio")); })
            .then(()=>{fs.writeFile(path.join(__dirname,"directorio","file.txt"),"Contenido inicial")})
            .then(()=>{fs.appendFile(path.join(__dirname,"directorio","file.txt")," Contenido añadido")})
            .then(()=>{
                 fs.readFile(path.join(__dirname,"directorio","file.txt"))
                 .then((data)=>console.log(data.toString()))
            })
            
            await fs.rename(path.join(__dirname,"directorio","file.txt"),path.join(__dirname,"directorio","rename.txt"));
            await fs.copyFile(path.join(__dirname,"directorio","rename.txt"),path.join(__dirname,"directorio","copyfile.txt"));
     } catch (error) {
        console.error('there was an error:', error.message);
     }
 })()
  