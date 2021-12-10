const fs = require('fs');
const path = require('path');


/**
 * Gestion de archivos
 */

// metodos sincronos bloquean el proceso hasta que se completan
// metodos asincronos no bloquean y llaman a un callback al finalizar

// crear un directorio
// para crear recursivamente carpetas usamos la propiedad {recursive:false|true} true

 fs.stat(path.join(__dirname, 'test'), (err) => {
    if(err) {
        fs.mkdir(path.join(__dirname, 'test'),{},(err)=>{
            if(err) throw err;
            console.log("Directorio creado correctamente...");
        }) 
    };
    // Crea y escribe un archivo
    fs.writeFile(path.join(__dirname,'test','ejemplo.txt'),"Es un ejemplo de contenido",(err)=>{
        if (err) throw err;
        console.log("el archivo ha sido creado satisfactoriamente");
    });

    //añadir un contenido a un archivo existente o lo crea

    fs.appendFile(path.join(__dirname,'test','ejemplo.txt')," I Love Javascript", (err)=>{
        if (err) throw err;
            console.log("El texto ha sido añadido");
    });

    // leer texto de un archivo

    fs.readFile(path.join(__dirname,'test','ejemplo.txt'),'utf-8',(err,data)=>{
        if (err) throw err;
        console.log(`El contenido es : ${data.toString()}`);
    });

    /* fs.rename(path.join(__dirname,'test','ejemplo.txt'),path.join(__dirname,'test','ejemplo2.txt'),(err)=>{
        if (err) throw err;
        console.log("Ha sido renombrado");
    }); */

    fs.copyFile(path.join(__dirname,'test','ejemplo.txt'), path.join(__dirname,'test','ejemploCopi.txt'),(err)=>{
        if (err) throw err;
        console.log('ejemplo2.txt fue copiado en ejemploCopi.txt');
        fs.readFile(path.join(__dirname,'test','ejemplo.txt'),'utf-8',(err,data)=>{
            if (err) throw err;
            fs.appendFile(path.join(__dirname,'test','ejemploCopi.txt'),data.toString(), (err)=>{
                if (err) throw err;
                    console.log("El texto ha sido añadido");
            });
        });
    });
       


  });

  