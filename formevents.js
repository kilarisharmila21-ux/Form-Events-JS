// Submit and Reset

const mainForm = document.getElementById("myForm")
const userName = document.getElementById("nameInput")
const inputName = document.getElementById("name")

mainForm.addEventListener('submit', function(e) {
    e.preventDefault()

    const myUserName = userName.value

    inputName.textContent = myUserName

    mainForm.reset()

})



// Focus

const userInput = document.getElementById("nameInput")

userInput.addEventListener("focus", function(event) {
    event.target.style.background = "pink"
})



// Blur

userInput.addEventListener("blur", function(event) {
    event.target.style.background = ''
})



// Change

const myNewColors = document.getElementById("myColors")
const myNewBox = document.getElementById("box")

myNewColors.addEventListener("change", function() {
    myNewBox.style.background = myNewColors.value
})



// Input = (" first in the submit form remove reset method and change the submit into input")
// then the output will be = if we are typing the name in the input then automatically it will be display in the user details 
// with the same time
