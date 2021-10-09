/**
 * PT-BR
 * Esse método recebe uma função que possui um acumulador e um valor como argumento.
 * Ele aplica a função ao acumulador e cada valor no array retorna no final apenas um único valor.  
 * 
 * EN-US
 * This method receives a function which has an accumulator and a value as an argument. 
 * It applies the function to the accumulator and each value in the array to return at the end just a single value.
 * 
 */
 
const exampleArray = [1,2,3,4,5,6,7,8]
const sum = exampleArray.reduce((total, value) => total + value)
console.log(sum)
//-------> Output = 36 