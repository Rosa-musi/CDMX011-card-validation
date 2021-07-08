import validator from './validator.js';

let cardNumIn
const inputGet = document.getElementById('inputGet')
const get = document.getElementById('get')
const response = document.getElementById('response')
const enterData = document.getElementById('enterData')
const homeButton = document.getElementById('homeButton')
const displayCardNum = document.getElementById('displayCardNum')
const responseMessege = document.getElementById('responseMessege')
const homeCreditCard = document.getElementById('Card')
const issuer = document.getElementById('issuer')

get.addEventListener('click', () => {
    cardNumIn = inputGet.value
    if (cardNumIn == "") {
        alert("No puedes validar un campo vacío, ingresa un número por favor")
    }else {
        let validatorResponse = validator.isValid(cardNumIn)
        let maskifyResponse = validator.maskify(cardNumIn)
        let issuerResponse = validator.getIssuer(cardNumIn)
        homeCreditCard.style.display = "none"

        if (validatorResponse === true) {
            enterData.style.display = "none"
            response.style.display = "flex"
            issuer.innerHTML = issuerResponse
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





