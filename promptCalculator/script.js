askClientNumber();

function askClientNumber() {
    var x = +(prompt("لطفا عدد اول را وارد کنید"));
    var y = +(prompt("لطفا عدد دوم را وارد کنید"));
    if (isNaN(x && y)) {
        alert("لطفا عدد وارد نمایید")
        askClientNumber()
    } else { askClientOperation(x, y) };
}

function askClientOperation(x, y) {
    let mathOperation = prompt("چه عملیات ریاضی انجام شود؟");
    cal(mathOperation, x, y);
}

function cal(op, x, y) {
    if (op == "+") {
        result = x + y;
    } else if (op == "-") {
        result = x - y;
    } else if (op == "*") {
        result = x * y;
    } else if (op == "/") {
        result = x / y;
    } else if (op == "%") {
        result = x % y;
    } else {
        alert("لطفا عملیات ریاضی وارد نمایید");
        askClientOperation(x , y);
    }
    alert(`جواب محاسبه ${result} می باشد`);
}











