//import module
const mymodule = require(`./modules/mymodule.js`);

//import spacific module
const timenow = require(`./modules/mymodule.js`).getcurrentTime;
//use module
console.log(timenow())
console.log(mymodule.add(50,100))