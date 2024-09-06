function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    display.value = eval(display.value);
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
