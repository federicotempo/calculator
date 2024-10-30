
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

    if (operator !== "") {
        
        if (displayedValue.innerText === firstNumber.toString()) {
            displayedValue.innerText = "0";
        }

        if (displayedValue.innerText.length < 10) {
            if (displayedValue.innerText === "0" && value === ".") {
                displayedValue.innerText += value;
                secondNumber = Number(displayedValue.innerText);
            } else if (displayedValue.innerText.includes(".") && value === ".") {
                return
            } else if (displayedValue.innerText === "0") {
                displayedValue.innerText = value;
                secondNumber = Number(displayedValue.innerText);
            } else {
                displayedValue.innerText += value;
                secondNumber = Number(displayedValue.innerText);
            }
        }
    } else {

        if (displayedValue.innerText.length < 10) {
            if (displayedValue.innerText === "0" && value === ".") {
                displayedValue.innerText += value;
                firstNumber = Number(displayedValue.innerText);
            } else if (displayedValue.innerText.includes(".") && value === ".") {
                return
            } else if (displayedValue.innerText === "0") {
                displayedValue.innerText = value;
                firstNumber = Number(displayedValue.innerText);
            } else {
                displayedValue.innerText += value;
                firstNumber = Number(displayedValue.innerText);
            }
        }
    }
}

function cleanValues(result) {
    firstNumber = result;
    secondNumber = 0;
    operator = "";
}

function showResult(result) {
    displayedValue.innerText = result;
}

function selectNumericButtons() {
    let selectedNumber = this.innerText;
    displayValue(selectedNumber);
}

function selectOperator() {
    displayedValue.innerText = firstNumber.toString();
    let selectedOperator = this.innerText;
    operator = selectedOperator;
}

const displayedValue = document.querySelector("#value");

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

let operatorButtons = document.querySelectorAll(".operator-button")
let numericButtons = document.querySelectorAll(".numeric-button");
let equalButton = document.querySelector("#equal-button");

equalButton.addEventListener("click", () => {
    let result = 0;
    if (operator !== "") {
        result = parseFloat(Number(operate(firstNumber, secondNumber, operator)).toPrecision(9));
        showResult(result)
        cleanValues(result);
    }
})

numericButtons.forEach(button => {
    button.addEventListener("click", selectNumericButtons);
})

operatorButtons.forEach(button => {
    button.addEventListener("click", selectOperator);
})


