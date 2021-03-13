/**
 * PT-BR
 * Esse método recebe uma função como parâmetro e retorna um novo array que contém o valor da função
 * a cada item. Sempre retornará a mesma quantidade de itens
 * 
 * EN-US
 * This method receives a function as a parameter. 
 * And return a new array that contains an image of each element of the array. It will always return the same amount of items. 
 * 
 */

const exampleArray = [1,2,3,4,5]
const myNewArray = exampleArray.map(x => x * 2)
console.log(myNewArray)
//-------> Output : [2,4,6,8,10]