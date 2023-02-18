let score = prompt('input your grade')
document.getElementById("grade").innerHTML = "You input = " + score;
if(score >= 70){
    document.getElementById("graderesult").innerHTML = "You Got A";
}else if(score >= 60){
    document.getElementById("graderesult").innerHTML = "You Got B";
}else if(score >= 50){
    document.getElementById("graderesult").innerHTML = "You Got C";
}else if(score >= 40 ){
    document.getElementById("graderesult").innerHTML = "You Got D";
}else{
    document.getElementById("graderesult").innerHTML = "You Fool";
}