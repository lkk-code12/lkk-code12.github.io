let calculate = document.getElementById(`calculate_btn`)
    .addEventListener(`click`, function() {
        let display = document.getElementById(`display`);
        let firstNum = parseFloat(document.getElementById(`firstNumber`).value);
        console.log(firstNum);
        let secondNum = parseFloat(document.getElementById(`secondNumber`).value);
        console.log(secondNum);
        let option = document.getElementById(`calculate_option`).value;
        console.log(option);

        if (firstNum.value == null) {
            let fill_first_num = document.getElementById(`fill_first_num`);
            fill_first_num.innerHTML = "hello";
        }

        switch (option) {
            case "plus":
                display.innerHTML = firstNum + secondNum;
                break;

            case "minus":
                display.innerHTML = firstNum - secondNum;
                break;

            case "multiply":
                display.innerHTML = firstNum * secondNum;
                break;

            case "division":
                display.innerHTML = firstNum / secondNum;
                break;

            default:
                break;
        }

    })

let clear = document.getElementById(`clear_btn`)
    .addEventListener(`click`, function() {
        document.getElementById(`display`).innerHTML = 0;
    })