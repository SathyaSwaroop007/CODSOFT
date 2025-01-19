const display = document.getElementById('display');

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        calculate();
    }
});

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
