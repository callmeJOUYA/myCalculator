function showingQuestion(value){
    document.getElementById("answer").value += value;
}

function clear(){
    document.getElementById("answer").value = "";
}

function clculateAnswer(){
    var answer = document.getElementById("answer").value;
    var result = eval(answer)
    document.getElementById("answer") = result
}

