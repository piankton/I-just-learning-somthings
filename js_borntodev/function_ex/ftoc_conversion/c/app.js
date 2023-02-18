function tofahrenheit(){
    let celsius = prompt("fahrenhiet");
    let value = (celsius *9)/5+32 ;

    document.getElementById("anwser_section").innerHTML= value.toFixed(2)+"f";
}

tofahrenheit()