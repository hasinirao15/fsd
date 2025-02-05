const EventEmitter = require('events');


const emitter = new EventEmitter();

const userDetailsListener = (name, age) => {
  console.log(`Hello, ${name}! You are ${age} years old.`);
};

emitter.on('userDetails', userDetailsListener);

emitter.emit('userDetails', 'Hasini', 20); 
