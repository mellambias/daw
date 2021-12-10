// información del sistema donde corre el script

const os = require('os');

osData={
 plataforma : os.platform(),
 arquitectura : os.arch(),
 cpu : os.cpus(),
 memoriaLibre : os.freemem(),
 net: os.networkInterfaces(),
 memoriaTotal : os.totalmem(),
 tiempoEncendido : os.uptime(),
 homeDir : os.homedir(),
}





console.log(osData);