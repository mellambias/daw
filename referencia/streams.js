const fs = require('fs');
const path = require('path');


const myReadStream = fs.createReadStream("data.txt","utf-8");
const myWriteStream = fs.createWriteStream("data2.txt","utf-8");
const myWriteStream2 = fs.createWriteStream("data3.txt","utf-8");

myReadStream.on('data', (chunk) => {
    console.log('Nuevo chunk recibido...',chunk.length, myReadStream.bytesRead);
    myWriteStream.write(chunk);
})

// usando pipes

myReadStream.pipe(myWriteStream2);