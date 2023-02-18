let round = prompt("how mush to play?");

for(var i=0; i<round; i++){
    var answer = prompt("Head or pinky?");
    let random_coin = randomnumber = Math.random();
    let random_awnser = "";

    if(random_coin = 0){
        random_awnser = "หัว"
    }else{
        random_awnser = "ก้อย"
    }

    if(answer == random_awnser){
        document.getElementById("game-list").innerHTML+="YOU WIN : "+ answer + "answer : random" +random_awnser + "<br />";
    }else{
        document.getElementById("game-list").innerHTML+="YOU FOOL : "+ answer + "answer : random" +random_awnser + "<br />";
    }

    console.log(answer + "<answer : random_answer>" +random_awnser)
}