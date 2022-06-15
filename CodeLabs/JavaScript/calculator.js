let num1 = document.getElementById(`firstNumber`);
let num2 = document.getElementById(`secondNumber`);
let operation = document.getElementById(`operation`);
let result = document.getElementById(`show`);
let finalResult;

let btn = document.getElementById(`btn`);
btn.addEventListener(`click`, function() {
    switch (operation) {
        case plus:
            finalResult = num1.value + num2.value;
            break;

        case minus:
            finalResult = num1.value - num2.value;
            break;

        case multiply:
            finalResult = num1.value * num2.value;
            break;

        case division:
            finalResult = num1.value / num2.value;
            break;

        default:
            break;
    }
})