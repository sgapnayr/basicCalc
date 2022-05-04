/* Display */
let display = document.getElementById('sum-div')

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

/* Functionality */
add.addEventListener('click', () => {
    output = parseInt(num1.value) + parseInt(num2.value)
    display.innerText = output
})

sub.addEventListener('click', () => {
    output = parseInt(num1.value) - parseInt(num2.value)
    display.innerText = output
})

mult.addEventListener('click', () => {
    output = parseInt(num1.value) * parseInt(num2.value)
    display.innerText = output
})

div.addEventListener('click', () => {
    output = parseInt(num1.value) / parseInt(num2.value)
    display.innerText = output
})

/* Error Handling */
inputs.forEach((input) => {
    input.addEventListener('keyup', (event) => {
        if (isNaN(input.value)) {
            input.classList.add('red')
        } else {
            input.classList.remove('red')
        }
    })
})


// buttons.forEach((button) => {
//     button.addEventListener('click', (e) => {
//         let number1 = parseInt(num1.value)
//         let number2 = parseInt(num2.value)
//         switch (operator) {
//             case '+':
//                 let op = number1 + number2
//                 display.innerText = op
//                 break;
//             case '-':
//                 let op = number1 - number2
//                 display.innerText = op
//                 break;
//             case '*':
//                 let op = number1 * number2
//                 display.innerText = op
//                 break;
//             case '/':
//                 let op = number1 / number2
//                 display.innerText = op
//                 break;
//         }
//     })
// })