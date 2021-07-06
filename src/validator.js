//aquí va la función para vaalidar y esconder los últimos 4 dígitos


const validator = {
  isValid: function(cardNum){
    let number = cardNum
    let digits = number.split("");  //toString cambia numbers a string para con .split hacer un array con cada número
    let oddSum = 0; 
    let evenSum = 0;  
    let finalSum = 0;  
    let response 
  
  
   for(let i = 0; i < digits.length; i++){ // se itera cada posición del arrai [i] y si el tuto de posiciones del array (digits.length) es menor que i se suma uno a i para recorrer todas las posiciones
        if (i % 2 === 0) { // si i entre 2 tiene un resudio de 0 quiere decir que i es par
            if(parseInt(digits[i]) * 2 >= 10){  //con parseInt convierto mi string a número y si al multiplicarlo por dos es mayor a 10 entonces se le restan 9 que es lo mismo que sumar los dos números del número más grande que 9 y se va sumando a los números pares
                evenSum += ((parseInt(digits[i]) * 2) - 9);
            } else {
                evenSum += parseInt(digits[i]) * 2;  //si el número es menor o igual a 9 entonces sólo se multiplica por 2 y se va sumando a los números pares
            }
        } else {
            oddSum += parseInt(digits[i]); //en el else quiere decir que el resto de números son impares y esos sólo se van sumando uno a uno con += a la suma de n+umeros impares
        }
    }
    finalSum = oddSum + evenSum //aquí se suman ambas sumas, la de números pares y la de impares
    if(finalSum % 10 === 0) { //si la suma final dividida entre 10 dá como residuo 0 la tarjeta es válida.
        response = true
       // console.log("tu tarjeta es válida") 
    } else {
        //console.log("tu tarjeta no es válida") //si la suma final dividida entre 10 dá como residuo un número diferente de cero la tarjeta es inválida.
        response = false
    } 
    console.log(response)
    return response
  },
  
  maskify: function(){
    let hola = "hola"
    return hola
  }
};

export default validator;

/* function numeralia(){
  let numbers = 5423499974709514 //número de tarjeta
  let digits = numbers.toString().split("");  //toString cambia numbers a string para con .split hacer un array con cada número
  let oddSum = 0; //suma de números impares
  let evenSum = 0;  //suma de números pares
  let finalSum = 0;  //suma de números pares e impares


 for(let i = 0; i < digits.length; i++){ // se itera cada posición del arrai [i] y si el tuto de posiciones del array (digits.length) es menor que i se suma uno a i para recorrer todas las posiciones
      if (i % 2 === 0) { // si i entre 2 tiene un resudio de 0 quiere decir que i es par
          if(parseInt(digits[i]) * 2 >= 10){  //con parseInt convierto mi string a número y si al multiplicarlo por dos es mayor a 10 entonces se le restan 9 que es lo mismo que sumar los dos números del número más grande que 9 y se va sumando a los números pares
              evenSum += ((parseInt(digits[i]) * 2) - 9);
          } else {
              evenSum += parseInt(digits[i]) * 2;  //si el número es menor o igual a 9 entonces sólo se multiplica por 2 y se va sumando a los números pares
          }
      } else {
          oddSum += parseInt(digits[i]); //en el else quiere decir que el resto de números son impares y esos sólo se van sumando uno a uno con += a la suma de n+umeros impares
      }
  }
  finalSum = oddSum + evenSum //aquí se suman ambas sumas, la de números pares y la de impares
  if(finalSum % 10 === 0) { //si la suma final dividida entre 10 dá como residuo 0 la tarjeta es válida.
      console.log("tu tarjeta es válida") 
  } else {
      console.log("tu tarjeta no es válida") //si la suma final dividida entre 10 dá como residuo un número diferente de cero la tarjeta es inválida.
  } 
}

numeralia()
 */