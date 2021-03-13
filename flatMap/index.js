/**
* PT-BR
* A função flatMap realiza um map de uma função sobre uma coleção de dados ( array ), 
* porém achatando o resultado final em um nível, isto é, retornando um array de uma dimensão apenas.
* 
* EN-US
* The method applies a function to each element of the array and then flatten the result into an array.
* It combines flat() and map() in one function.
*/

const exampleArray = [[12], [2], [3], [4], [5]]

const flatedMapedArray = exampleArray.flatMap(arr => arr * 10)
console.log(flatedMapedArray)
//-------> Output : [10, 20, 30, 40, 50]

// With .flat() and .map()
const flatedAndMapedArray = exampleArray.flat().map(arr => arr * 10)
console.log(flatedMapedArray)
//-------> Output : [10, 20, 30, 40, 50]
// Is the same Result of flatMap