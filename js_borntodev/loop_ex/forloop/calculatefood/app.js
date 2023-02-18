let qrt = prompt('product item amout');
let sum = 0
for( var i=1; i<=qrt; i++){
    let itemprice = prompt('value of item '+i+" is")
    document.getElementById("pricelist").innerHTML += "item "+i+" Price "+itemprice +" Bath"+"<br />";
    sum = sum + parseFloat(itemprice);
    //+= in innerHTML is add and add and add
    // parseInt,parseFloat = change any type of data to Int
}
document.getElementById("result").innerHTML = "Result is "+ sum + " Bath";
