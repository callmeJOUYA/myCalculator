function showingQuestion(value){
    document.getElementById("answer").value += value;
}

function clear(){
    document.getElementById("answer").value = "";
}

function clculateAnswer(){
    var answer = document.getElementById("answer").value;
    var result = eval(answer);
    document.getElementById("answer") = result;
}

function clearTheLast(){
    var answer = document.getElementById("answer").value;
    answer = answer.slice(0, -1);
    document.getElementById("amswer").value = answer;
}