/* Display */
let display = document.getElementById('sum-div')
let error = document.getElementById('error')

/* Operators */
const add = document.getElementById('add')
const sub = document.getElementById('sub')
const mult = document.getElementById('mult')
const div = document.getElementById('div')

/* Inputs */
const inputs = document.querySelectorAll('.input')
const buttons = document.querySelectorAll('.button')
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')

/* Error Handling */
inputs.forEach((input) => {
    input.addEventListener('keyup', () => {
        if (isNaN(input.value)) {
            input.classList.add('red')
            error.innerText = "Please Enter a Number"
        } else {
            input.classList.remove('red')
            error.innerText = ""
        }
    })
})

/* Functionality */
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let number1 = parseInt(num1.value)
        let number2 = parseInt(num2.value)
        let output;
        switch (e.target.innerText) {
            case '+':
                output = number1 + number2
                break
            case '-':
                output = number1 - number2
                break
            case 'X':
                output = number1 * number2
                break
            case '/':
                output = (number1 / number2).toFixed(3)
                break
        }
        display.innerText = output
    })
})
