/**
* PT-BR
* Esse método recebe uma função como um argumento e aplica no array.
* O método retorna o valor ou elemento que satisfaz a função passada, caso não haja elementos ou valores que satisfaça a função
* retorna undefined 
* 
* EN-US
* This method receives a function as an argument and will apply it to the array. 
* It returns the value of an element found in the array and which satisfies the test function. Otherwise, it returns undefined.
*/

const exampleArray = [
  { id: 1, title: 'Naruto Uzumaki' },
  { id: 2, title: 'My Element' },
  { id: 3, title: 'Victor Farias' },
]

const myElement = exampleArray.find(element => element.title === 'My Element')
console.log(myElement)
//-------> Output : {id: 3, title: 'My Element'}

const undefinedElement = exampleArray.find(element => element.title === 'Sasuke Uchiha')
console.log(undefinedElement)
//-------> Output : undefined