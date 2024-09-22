let currentInput = ''; 
let previousInput = ''; 
let operator = null; 
let resultDisplayed = false; 


function appendNumber(number) {
    if (resultDisplayed) {
        currentInput = ''; 
        resultDisplayed = false;
    }
    currentInput += number.toString();
    updateDisplay(currentInput);
}


function appendOperator(op) {
    if (currentInput === '' && op === '-') {
        currentInput = '-'; 
        updateDisplay(currentInput);
        return;
    }
    if (currentInput === '' && previousInput === '') return;

    if (previousInput !== '' && currentInput !== '') {
        calculate(); // 
    }

    operator = op;
    previousInput = currentInput;
    currentInput = '';
}


function updateDisplay(value) {
    const display = document.getElementById('display');
    display.textContent = value || '0';
}


function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    resultDisplayed = false;
    updateDisplay('0');
}


function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput);
}


function calculate() {
    let result;
    const previous = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(previous) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = previous + current;
            break;
        case '-':
            result = previous - current;
            break;
        case '*':
            result = previous * current;
            break;
        case '/':
            result = previous / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = '';
    resultDisplayed = true;
    updateDisplay(currentInput);
}
