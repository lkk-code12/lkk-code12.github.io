let display = document.getElementById(`display`);

function one() {
    let one = parseInt(document.getElementById(`one`).value);
    let oneInt = parseInt((display.innerHTML += one).value);
    console.log(typeof(oneInt));
}

function two() {
    let two = parseInt(document.getElementById(`two`).value);
    let twoInt = parseInt((display.innerHTML += two).value);
    console.log(typeof(twoInt));
}

function plus() {
    let plus = document.getElementById(`plus`).value;
    console.log(plus);
}