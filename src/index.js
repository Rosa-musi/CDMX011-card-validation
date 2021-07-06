import validator from './validator.js';

let cardNumIn
let inputGet = document.getElementById('inputGet')
let get = document.getElementById('get')
let invalid = document.getElementById('invalid')
let valid = document.getElementById('valid')
let enterData = document.getElementById('enterData')
let homeButton = document.getElementById('homeButton')


get.addEventListener('click', () => {
    cardNumIn = inputGet.value
    validator.isValid(cardNumIn)
    console.log(cardNumIn)
    if (validator.isValid(cardNumIn) === true) {
        enterData.style.display = "none"
        valid.style.display = "flex"
        homeButton.style.display = "flex"
    } else {
        enterData.style.display = "none"
        invalid.style.display = "flex"
        homeButton.style.display = "flex"
    }
})

homeButton.addEventListener('click', () => {
    valid.style.display = "none"
    invalid.style.display = "none"
    inputGet.value = ""
    enterData.style.display = "flex"
    homeButton.style.display = "none"
})





//aquí hacer todas las llamadas al DOM

//console.log(validator);
