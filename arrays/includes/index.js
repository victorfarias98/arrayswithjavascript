/**
* PT-BR
* Esse método retorna true se esse array conter o valor passado no parâmetro
* 
* EN-US
* This method will return true if the array contains a certain element, and false if not.
*/

const exampleArray = ['Helena', 'Victor', 'Sasuke', 'Naruto']
const existsInArray = exampleArray.includes('Helena')
// console.log(existsInArray)
// -------> Output : true
const dontExistsInArray = exampleArray.includes('Pain')
// console.log(dontExistsInArray)
// -------> Output : false
