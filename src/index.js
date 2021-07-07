import validator from './validator.js';

let cardNumIn
let inputGet = document.getElementById('inputGet')
let get = document.getElementById('get')
let response = document.getElementById('response')
let enterData = document.getElementById('enterData')
let homeButton = document.getElementById('homeButton')
let displayCardNum = document.getElementById('displayCardNum')
let responseMessege = document.getElementById('responseMessege')
let homeCreditCard = document.getElementById('Card')

get.addEventListener('click', () => {
    cardNumIn = inputGet.value
    if (cardNumIn == "") {
        alert("No puedes validar un campo vacío, ingresa un número por favor")
    }else {
        let maskifyResponse = validator.maskify(cardNumIn)
        let validatorResponse = validator.isValid(cardNumIn)
        homeCreditCard.style.display = "none"

        if (validatorResponse === true) {
            enterData.style.display = "none"
            response.style.display = "flex"
            displayCardNum.innerHTML = maskifyResponse
            responseMessege.innerHTML = "Se ha validado correctamente" 
            homeButton.style.display = "flex"

        } else {
            enterData.style.display = "none"
            response.style.display = "flex"
            displayCardNum.innerHTML = maskifyResponse
            responseMessege.innerHTML = "no ha pasado la validación, puedes intentar nuevamente o comunicarte con el servicio de soporte de tu tarjeta." 
            homeButton.style.display = "flex"
        }
    }
})

homeButton.addEventListener('click', () => {
    response.style.display = "none"
    inputGet.value = ""
    enterData.style.display = "flex"
    homeButton.style.display = "none"
    homeCreditCard.style.display = "flex"
})





