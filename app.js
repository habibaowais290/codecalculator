var number;

function getNumber(num) {
    var ans = document.getElementById("ans");
    ans.value += num;
}

function clearNumber() {
    var ans = document.getElementById("ans");
    ans.value = "0";
}

function deleteNumber() {
    var len = ans.value.length - 1;
    var newNumber = ans.value.substring(0, len);
    ans.value = newNumber;
}

function total() {

    ansTotal = eval(ans.value);
    ans.value = ansTotal;
}

function fnSin() {
    var ans = document.getElementById("ans");
    ans.value = Math.sin(ans.value);
}

function fnCos() {
    var ans = document.getElementById("ans");
    ans.value = Math.cos(ans.value);
}

function fnTan() {
    var ans = document.getElementById("ans");
    ans.value = Math.tan(ans.value);
}

function fnLog() {
    var ans = document.getElementById("ans");
    ans.value = Math.log(ans.value);
}

function fnSqr() {
    var ans = document.getElementById("ans");
    ans.value = Math.pow(ans.value, 2);
}

function fnSqrt() {
    var ans = document.getElementById("ans");
    ans.value = Math.sqrt(ans.value);
}

function fnSquare() {

    var ans = document.getElementById("ans");
    ans.value = Math.pow(ans.value, 3);
}








