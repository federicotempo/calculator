
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(firstNumber, secondNumber, operator) {
    let result = 0;

    switch (operator) {
        case "+":
            result = add(firstNumber, secondNumber);
            break;

        case "-":
            result = subtract(firstNumber, secondNumber);
            break;

        case "*":
            result = multiply(firstNumber, secondNumber);
            break;

        case "/":
            result = divide(firstNumber, secondNumber);
            break;
    }

    return result;
}

function displayValue(value) {

    if (displayedValue.innerText === "0" && value === ".") {
        displayedValue.innerText = "0" + value;
    } else if (displayedValue.innerText === "0") {
        displayedValue.innerText = value;
    } else {
        displayedValue.innerText += value;
    }

}

function selectNumericButtons() {
    let selection = this.innerText;
    displayValue(selection);
}

const displayedValue = document.querySelector("#value");

let firstNumber = 0;
let secondNumber = 0;
let operator = "+";

let numericButtons = document.querySelectorAll(".numeric-button");

numericButtons.forEach(button => {
    button.addEventListener("click", selectNumericButtons);
})

