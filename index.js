const {EventEmitter} = require('events');

const EVENT = EventEmitter();

EVENT.on('1+1', () => {
console.log('2');
})


EVENT.emit('ELEMENTARY');