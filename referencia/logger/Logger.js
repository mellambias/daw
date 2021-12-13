const EveventEmiter = require('events');
const { EventEmitter } = require('stream');
const { v4: uuid } = require('uuid');

// console.log(uuid());

class Logger extends EventEmitter{
    log(msg){
        this.emit('alerta', {"id":uuid(), "msg":msg});
    }
}

module.exports = Logger;