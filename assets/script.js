/* SETTING UP VARIABLES */
var add = document.getElementById('add')
var subtract = document.getElementById('subtract')
var initialNumber = document.getElementById('initialNumber')
var currentNumber = 0


/* USING "ONCLICK EVENT" TO ACTIVATE FUNCTIONS */
function decrement() {
   currentNumber = currentNumber - 1
   initialNumber.innerHTML = currentNumber
}

function increment() {
   currentNumber = currentNumber + 1
   initialNumber.innerHTML = currentNumber
}


/* USING "addEventListener() method" TO ATTACH AN EVENT HANDLER TO MY ELEMENTS*/
// add.addEventListener("click", () => {
//    currentNumber = currentNumber + 1
//    initialNumber.innerHTML = currentNumber
// })

// subtract.addEventListener("click", () => {
//    currentNumber = currentNumber - 1
//    initialNumber.innerHTML = currentNumber 
// })





