const os=require('os')
var sec=os.uptime();
var min=Math.floor(sec/60);
var hours=Math.floor(min/60);
var days=Math.floor(hours/24);
console.log(`${days} days`);
console.log(`${hours} hours`);
console.log(`${min} minutes`);

