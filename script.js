let currentInput = "";
let previousInput = "";
let currentOperation = null;
let memory = 0;

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearEntry() {
    currentInput = "";
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    currentOperation = null;
    document.getElementById('display').value = currentInput;
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('display').value = currentInput;
}

function toggleSign() {
    if (currentInput) {
        currentInput = String(parseFloat(currentInput) * -1);
        document.getElementById('display').value = currentInput;
    }
}

function sqrt() {
    if (currentInput) {
        currentInput = String(Math.sqrt(parseFloat(currentInput)));
        document.getElementById('display').value = currentInput;
    }
}

function calculatePercentage() {
    if (currentInput) {
        currentInput = String(parseFloat(currentInput) / 100);
        document.getElementById('display').value = currentInput;
    }
}

function calculate() {

    console.log('Function calculate() called.');
    console.log('previousInput:', previousInput);
    console.log('currentOperation:', currentOperation);
    console.log('currentInput:', currentInput);

    
    if (previousInput && currentOperation && currentInput) {
        let result;

        switch (currentOperation) {
            case '+':
                result = parseFloat(previousInput) + parseFloat(currentInput);
                break;
            case '-':
                result = parseFloat(previousInput) - parseFloat(currentInput);
                break;
            case '*':
                result = parseFloat(previousInput) * parseFloat(currentInput);
                break;
            case '/':
                result = parseFloat(previousInput) / parseFloat(currentInput);
                break;
        }

        currentInput = String(result);
        previousInput = "";
        currentOperation = null;

        document.getElementById('display').value = currentInput;
    }
}

function setOperation(op) {
    if (currentInput) {
        previousInput = currentInput;
        currentInput = "";
        currentOperation = op;
    }
}

function memoryAdd() {
    memory += parseFloat(currentInput);
}

function memorySubtract() {
    memory -= parseFloat(currentInput);
}

function memoryRecall() {
    currentInput = String(memory);
    document.getElementById('display').value = currentInput;
}
