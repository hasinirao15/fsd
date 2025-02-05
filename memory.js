const process=require('process')
console.log(process.memoryUsage());

const os = require('os');

function perc() {
  const total = os.totalmem(); 
  const free = os.freemem();  
  const percent = ((free / total) * 100).toFixed(2);
  console.log( percent);

}

setInterval(perc, 5000);
