const fs = require('fs');

fs.readFile(`E:/learningproject/kongruksiam_nodejs/fs/myFile/input.txt`,'utf8',(err,data)=>{
        if(err) return console.log("error: ",err);
        console.log(data);
        
    //create output file
    const outputtext = `hello node.js \n ${data} \n create: ${new Date()}`
    fs.writeFile(`E:/learningproject/kongruksiam_nodejs/fs/myFile/output.txt`,outputtext,err=>{
        if(err) return console.log("error: ",err) ;
        console.log("done write file");
    });
});
console.log("end task")