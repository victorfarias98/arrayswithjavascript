/**
* PT-BR
* O método irá unir dois ou mais arrays ou valores concatenando-os.
* O método retorna um novo array a partir da união elementos/arrays
* 
* EN-US
* This method will merge two or more arrays/values by concatenating it. It returns a new array with the elements.
*/

const exampleArray = [1, 2, 3, 4, 5]
const exampleArrayTwo = [10, 20, 30, 40, 50]
const concatedArray = exampleArray.concat(exampleArrayTwo)
console.log(concatedArray) 
//-------> Output : [1, 2, 3, 4, 5, 10, 20, 30, 40, 50]


const namesArray = ['Victor', 'Helena', 'Pedro']
const otherNamesArray = ['Júlia', 'Jaser', 'Luana']
const mixArrays = namesArray.concat(otherNamesArray)
console.log(mixArrays)
//-------> Output : [ 'Victor', 'Helena', 'Pedro', 'Júlia', 'Jaser', 'Luana' ]