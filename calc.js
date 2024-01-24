

class Calculator {

    // display = document.getElementById('displayId');

    constructor(display) {
        this.display =display;
        this.clearDisplay();
        this.addEventListeners();
    }

    addEventListeners() {
        const buttons = document.querySelectorAll('.calculator button');
        buttons.forEach(button => {
            button.addEventListener('click', () => this.handleButtonClick(button.textContent));
        });
    }

    handleButtonClick(value) {
        switch (value) {
            case 'C':
                this.clearDisplay();
                break;
            case 'X':
                this.backspace();
                break;
             
            case '%':
                this.percent();
                break;    
            case '=':
                this.calculate();
                break;
            default:
                this.addToDisplay(value);
        }
    }

    clearDisplay() {
        this.display.textContent = '';
    }

    addToDisplay(value) {
        this.display.textContent += value;
    }

    backspace() {
        this.display.textContent = this.display.textContent.slice(0, -1);
    }

    percent() {
        // Convert the current value to a percentage
        try {
            const currentValue = parseFloat(this.display.textContent);
            const result = currentValue / 100;
            this.display.textContent = result;
        } catch (error) {
            this.display.textContent = 'Error';
        }
    }

   
    //substract
    //multiply
    //divide
    ///add

    
    calculate() {
        try {
            const result = eval(this.display.textContent);
            this.display.textContent = result;
        } catch (error) {
            this.display.textContent = 'Error';
        }
    }
}

// const calculator = new Calculator('display');


const calculator = new Calculator(document.getElementById('displayId'));



