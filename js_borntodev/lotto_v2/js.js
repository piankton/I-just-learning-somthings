let buyer = prompt("input number")
let randomnumber = Math.floor(Math.random()* 100);
console.log(buyer);
console.log(randomnumber);
document.getElementById("randomnumberresult").innerHTML = randomnumber;
document.getElementById("yourrandom").innerHTML = buyer;

if(buyer >= randomnumber){
    document.getElementById("resultshow").innerHTML = "Great you win";
}else{
    document.getElementById("resultshow").innerHTML = "Sorry try agian";
}