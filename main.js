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

// calculate = (event) => {
//     let num1 = parseInt(input1.value);
//     let num2 = parseInt(input2.value);
//     if (isNaN(num1) || isNaN(num2)) {
//       outputField.innerText = "Numbers please!";
//       outputField.classList.add("red");
//       return;
//     }
//     let output;
//     switch (event.target.innerText) {
//       case "+":
//         output = num1 + num2;
//       case "-":
//         output = num1 - num2;
//       case "x":
//         output = num1 * num2;
//       default:
//         output = num1 / num2;
//     }
//     refreshOutput(output);
//   };
