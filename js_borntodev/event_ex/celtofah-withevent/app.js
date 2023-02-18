function celtofah(fahrenheit){
    let value = (fahrenheit -32)*5/9;
    return value.toFixed(2)+ " celsuis";
}

function fahtocle(celsius){
    let value = (celsius*9)/5+32;
    return value.toFixed(2)+ " fahrenheit";
}
//calculate funtion

function displayid(elementid, orivalue, value){
    document.getElementById(elementid).innerHTML ="ค่าที่ใส่ "+orivalue +" ค่าที่ได้ "+ value
}
//display funtion


function clickfahcal (value){
    let celsiustofahrenheit = value;
    return displayid("celtofah",celsiustofahrenheit,celtofah(parseFloat(celsiustofahrenheit)));
    // ask user to input cel convert to fah
}

function clickcalfah(value){
    let fahrenheittocelsius = value;
    return displayid("fahtocel",fahrenheittocelsius,fahtocle(parseFloat(fahrenheittocelsius)));
    // ask user to input fah convert to cel
}
