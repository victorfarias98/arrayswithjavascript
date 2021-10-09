/**
 * PT-BR
 * Esse método recebe uma função como parâmetro que testa se todos os elementos do array estão dentro da verificação
 * Se todos os elementos passarem no teste da função retorna true, caso contrário retorna false 
 * 
 * EN-US
 * This method tests the array with a function passed as a parameter. 
 * It will return true if each element of the array match the test and false for the opposite.
 * 
 */
 

const exampleArrayFalse = ['a', 'b', 'c', 'd', 'e']
exampleArray.every(test => test === 'd')
//Testa se todos os elementos tem o valor de 'd'
//-------> Output : false

const exampleArrayTrue = ['a', 'a', 'a', 'a', 'a']
exampleArray.every(test => test === 'a')
//Testa se todos os elementos tem o valor de 'a'
//-------> Output : true