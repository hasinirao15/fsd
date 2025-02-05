const EventEmitter = require('events');


const emitter = new EventEmitter();


const onceListener = () => {
  console.log("once");
};

emitter.once('firstTimeEvent', onceListener);

emitter.emit('firstTimeEvent'); 
emitter.emit('firstTimeEvent');  
emitter.emit('firstTimeEvent');  
