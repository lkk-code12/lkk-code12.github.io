function insert(num) {
    document.calculator.display.value = document.calculator.display.value + num
}

function ce() {
    document.calculator.display.value = ``
}

function equal() {
    var equ = document.calculator.display.value
    if (equ){
        document.calculator.display.value = eval(equ)
    }
}

function back() {
    var exp = document.calculator.display.value
    document.calculator.display.value = exp.substring(0,exp.length-1)
}