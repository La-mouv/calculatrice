function appendToDisplay(value) {
    const display = document.getElementById('display');

    // Vérifier si le dernier nombre entré contient déjà un point
    if (value === '.' && display.value.split(/[-+*/]/).pop().includes('.')) {
        return;
    }

    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erreur';
    }
}
