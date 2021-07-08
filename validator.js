const validator = {
  isValid: function(cardNum){
    let number = cardNum
    let digits = number.split("").reverse();  //con .split hacer un array con cada número
    let oddSum = 0; 
    let evenSum = 0;  
    let finalSum = 0;   

   for(let i = 0; i < digits.length; i++){ // se itera cada posición del arrai [i] y si el tuto de posiciones del array (digits.length) es menor que i se suma uno a i para recorrer todas las posiciones
        if (i % 2 === 0) {  //array pares, orden de número impares                                                     
            oddSum += parseInt(digits[i]); //en el else quiere decir que el resto de números son impares y esos sólo se van sumando uno a uno con += a la suma de n+umeros impares// si i entre 2 tiene un resudio de 0 quiere decir que i es par
        } else {
            if(parseInt(digits[i]) * 2 >= 10){  //con parseInt convierto mi string a número y si al multiplicarlo por dos es mayor a 10 entonces se le restan 9 que es lo mismo que sumar los dos números del número más grande que 9 y se va sumando a los números pares
                evenSum += ((parseInt(digits[i]) * 2) - 9);
            } else {
                evenSum += parseInt(digits[i]) * 2;  //si el número es menor o igual a 9 entonces sólo se multiplica por 2 y se va sumando a los números pares
            }
        }
    }
    finalSum = oddSum + evenSum //aquí se suman ambas sumas, la de números pares y la de impares
    if(finalSum % 10 === 0) { //si la suma final dividida entre 10 dá como residuo 0 la tarjeta es válida.
        return true
    } else { 
        return false
    } 
  },
  
  maskify: function(cardNumMask){
    let number = cardNumMask
    let numberArray = Array.from(number)
    if (number.length <= 4) {
        return number
    } else {
        for (let i = 0; i < number.length - 4; i++){
            numberArray[i] = "#"
        }
        number = numberArray.join("")
        return number
    }
   
  },

  getIssuer: function(cardNumBank){
    let number = cardNumBank
    let firstTwoNumb = cardNumBank.slice(0, 1)
    if(number.startsWith("4")){
      return ("Visa")
    } else if (firstTwoNumb == "51" | "52" | "53" | "54" | "55" ) {
      return ("Master Card")
    } else if (number.startsWith("37")){
      return("American Express")
    } else if (number.startsWith("6011")) {
      return ("Discover")
    }
  }
};

export default validator;

