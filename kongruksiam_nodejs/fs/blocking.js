//import module fs 
const fs = require('fs');

//readfile
const data = fs.readFileSync(`E:/learningproject/kongruksiam_nodejs/fs/myFile/input.txt`,'utf8');
console.log(data)

//write file
const contentfile = `create day >>> ${new Date()}`
const writefile = fs.writeFileSync(`E:/learningproject/kongruksiam_nodejs/fs/myFile/output.txt`,contentfile)
console.log("file was create")