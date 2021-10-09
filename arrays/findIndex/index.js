/**
* PT-BR
* Esse método recebe uma função como parâmetro e aplica essa função no array
* O método retorna o índice do elemento que satisfaz essa condição da função, caso não encontre nenhum, retorna -1
* 
* EN-US
* This method receives a function as a parameter and will apply it to the array. 
* It returns the index of an element found and which satisfies the test function passed as an argument or -1 if none satisfies it.
*/
const exampleArray = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
]  
const indexOfExample = exampleArray.findIndex(example => example.id === 6)
console.log(indexOfExample)
//-------> Output : -1
const indexOfExampleTwo = exampleArray.findIndex(example => example.id === 2)
console.log(indexOfExampleTwo)
//-------> Output : 2