let round = prompt("how mush to play?");
var total_currect =  0;
for(var i=0; i<round; i++){
    var answer = prompt("หัว หรือ ก้อย");
    let random_coin = randomnumber = Math.random();
    let random_awnser = "";

    if(random_coin == 0){
        random_awnser = "หัว"
    }else{
        random_awnser = "ก้อย"
    }

    if(answer == random_awnser){
        document.getElementById("game-list").innerHTML+="YOU WIN : "+ answer + " - answer : random - " +random_awnser + "<br />";
        total_currect++;
    }else{
        document.getElementById("game-list").innerHTML+="YOU FOOL : "+ answer + " -answer : random - " +random_awnser + "<br />";
    }
    console.log(answer + "<-- answer : random_answer -->" +random_awnser)
    console.log(total_currect) 
}
document.getElementById("wincount").innerHTML = "You Win: "+ total_currect + " Times"   

