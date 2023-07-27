function showingQuestion(value){
    document.getElementById("answer").value += value;
}

function calculate(){
    var ans = document.getElementById("answer").value;
    var res = eval(ans)
    document.getElementById("answer").value = res
}

function clearAnswer(){
    document.getElementById("answer").value = "";
}

function clearTheLast(){
    var answer = document.getElementById("answer").value;
    answer = answer.slice(0, -1);
    document.getElementById("answer").value = answer;
}

function sqrt(){
    var answer = document.getElementById("answer").value;
    var sqrt = Math.sqrt(answer);
    document.getElementById("answer").value = sqrt;
}

function pwr2(){
    var answer = document.getElementById("answer").value;
    document.getElementById("answer").value = Math.pow(answer, 2);
}