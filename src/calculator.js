
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

function toPercentage() {
    let percentage = 0;

    if (operator !== "") {
        percentage = (secondNumber / 100);
        let percentageString = percentage.toString();
        if (percentageString.length <= 9) {
            displayedValue.innerText = percentageString;
        } else {
            displayedValue.innerText = percentage.toFixed(8).slice(0, 9);
        }
        secondNumber = percentage;
    } else {
        percentage = (firstNumber / 100);
        let percentageString = percentage.toString();
        if (percentageString.length <= 9) {
            displayedValue.innerText = percentageString;
        } else {
            displayedValue.innerText = percentage.toFixed(8).slice(0, 9);
        }
        firstNumber = percentage;
    }
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

        if (displayedValue.innerText.length < 9) {
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

        if (result !== 0) {
            displayedValue.innerText = "0";
            result = 0;
        }

        if (displayedValue.innerText.length < 9) {
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

function handleNumberKey(key) {
    displayValue(key);
}

function selectOperator() {
    displayedValue.innerText = firstNumber.toString();
    let selectedOperator = this.innerText;
    operator = selectedOperator;
}

function handleOperatorKey(key) {
    displayedValue.innerText = firstNumber.toString();
    operator = key;
}

function handleEqualButton() {
    if (operator !== "") {
        result = parseFloat(Number(operate(firstNumber, secondNumber, operator)).toPrecision(8));
        showResult(result);
        cleanValues(result);
    }
}

function toNegative() {
    if (operator !== "") {
        secondNumber *= (-1);
        displayedValue.innerText = secondNumber;
    } else {
        firstNumber *= (-1);
        displayedValue.innerText = firstNumber;
    }
}

const displayedValue = document.querySelector("#value");

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let result = 0;

let operatorButtons = document.querySelectorAll(".operator-button");
let numericButtons = document.querySelectorAll(".numeric-button");
let equalButton = document.querySelector("#equal-button");
let clearButton = document.querySelector("#clear-button");
let percentageButton = document.querySelector(".percentage-button");
let negativeButton = document.querySelector("#negative-button");

equalButton.addEventListener("click", handleEqualButton)

numericButtons.forEach(button => {
    button.addEventListener("click", selectNumericButtons);
})

operatorButtons.forEach(button => {
    button.addEventListener("click", selectOperator);
})

clearButton.addEventListener("click", () => {
    cleanValues(0);
    displayedValue.innerText = "0";
})

percentageButton.addEventListener("click", toPercentage);

negativeButton.addEventListener("click", toNegative);

document.addEventListener("keydown", function (event) {
    const key = event.key;
    const button = document.querySelector(`button[data-key="${key}"]`)

    if (button) {
        button.classList.add("active");

        if (!isNaN(key) || key === ".") {
            handleNumberKey(key);
        } else if (key === "+") {
            handleOperatorKey(key);
        } else if (key === "-") {
            handleOperatorKey(key);
        } else if (key === "*") {
            handleOperatorKey(key);
        } else if (key === "/") {
            handleOperatorKey(key);
        } else if (key === "Enter") {
            handleEqualButton()
        } else if (key === "Backspace" || key === "Delete") {
            cleanValues(0);
            displayedValue.innerText = "0";
        }

        setTimeout(() => {
            button.classList.remove('active');
        }, 150);
    }

})