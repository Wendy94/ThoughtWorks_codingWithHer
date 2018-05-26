var readline = require('readline');
var Module=require('./number');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// console.log("please input numbers:");
rl.on('line', function(line){
    Module.setInput(line.trim());
    console.log("the lcd form is:");
	Module.getRes();
});
rl.on('close', function() {
    console.log('exit');
    process.exit(0);
});