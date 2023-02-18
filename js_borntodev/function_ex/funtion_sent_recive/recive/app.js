// paremeter = ตัวแปร
function reciveit(username){
    return "hello " + username;
}
// parameter can have a multi with ,
function reciveit2pa(username,lastname){
    return username+" "+lastname;
}
console.log(reciveit());
console.log(reciveit("mean"));

console.log(reciveit2pa);

console.log(reciveit2pa("chonlakorn","takang"));
