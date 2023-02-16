let buyer = prompt("input number")
let randomnumber = Math.floor(Math.random()* 100);
console.log(buyer);
console.log(randomnumber);
document.getElementById("randomnumberresult").innerHTML = randomnumber;
document.getElementById("yourrandom").innerHTML = buyer;

/* 
document.getElementById("") << get id in html 
.innerHTML = ... << put somthing in html code
*----*----*----*
==  check and don't care type of data type
=== check and care datatype
!=  check alternative ==
!== check alternative ===

*/