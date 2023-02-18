function celtofah(fahrenheit){
    let value = (fahrenheit -32)*5/9;
    return value.toFixed(2)+ " celsuis";
}

function fahtocle(celsius){
    let value = (celsius*9)/5+32;
    return value.toFixed(2)+ " fahrenheit";
}
//calculate funtion

function displayid(elementid, value){
    document.getElementById(elementid).innerHTML = value
}
//display funtion


let celsiustofahrenheit = prompt("put celsius number");
alert(celtofah(celsiustofahrenheit));
displayid("celtofah",celtofah(parseFloat(celsiustofahrenheit)));
// ask user to input cel convert to fah

let fahrenheittocelsius = prompt("put fahrenheit number");
alert(fahtocle(fahrenheittocelsius));
displayid("fahtocel",fahtocle(parseFloat(fahrenheittocelsius)));
// ask user to input fah convert to cel
