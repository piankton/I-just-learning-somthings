function tocelsius(){
    let fahrenheit = prompt("fahrenheit");
    let value = (fahrenheit -32)* 5 / 9 ;

    document.getElementById("anwser_section").innerHTML= value.toFixed(2)+"c";
}

tocelsius()