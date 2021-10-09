/**
* PT-BR
* O método sort aceita como parâmetro [opcional] uma função com dois parâmetros - 
* dois objetos a serem comparados pelo algoritmo de ordenação. Essa função deve retornar um número 
* negativo se o primeiro objeto é menor que o segundo, um número positivo se o segundo é menor que o primeiro,
* e zero se ambos são iguais.
* 
* EN-US
* The sort method accepts as a parameter [optional] a function with two parameters - 
* two objects to be compared by the sorting algorithm. This function must return a negative number 
* if the first object is less than the second, a positive number if the second is less than the first,
* and zero if both are equal.
*/

const exampleArray = [5, 4, 3, 2, 1]

// Sort from smallest to largest
const sortedArrayToCrescent = exampleArray.sort((a, b) => a - b)
console.log(sortedArrayToCrescent)
//-------> Output : [1, 2, 3, 4, 5]

// Sort from largest to smallest
const sortedArrayToDecrescent = exampleArray.sort((a, b) => b - a)
console.log(sortedArrayToDecrescent)
//-------> Output : [5, 4, 3, 2, 1]