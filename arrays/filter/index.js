/**
 * PT-BR
 * Esse método recebe uma função como parâmetro e retorna um novo array que contém todos os elementos que passaram na função 
 * de filtragem, ou seja todos os elementos que retornaram true nas condições
 * No exemplo abaixo foi feito uma filtragem a partir do nome no exampleArray
 * 
 * EN-US
 * This method receives a function as a parameter. 
 * And return a new array that contains all the elements of the array for which the filtering function passed as argument returns true.
 * In the example below, a filter was made from the name in exampleArray
 * 
 */

 const exampleArray = [
   { id: 1, name: 'Victor' },
   { id: 2, name: 'Pedro' },
   { id: 3, name: 'Helena' },
   { id: 4, name: 'Helena' },
 ]
const arrayFiltered = exampleArray.filter(example => example.name === 'Helena')
console.log(arrayFiltered)
//-------> Output : 0:{id: 3, name: 'Helena'},
//                  1:{id: 4, name: 'Helena'}
//Example with users status
 const users = [
     { id : 1 , name : 'Victor' , status: true },
     { id : 2 , name : 'Jaser' , status: true },
     { id : 3 , name : 'Gomes' , status: false },
     { id : 4 , name : 'Pedro' , status: true },
     { id : 5 , name : 'Neri' , status: false }
 ]
 const activeUsers = users.filter(user => user.status === true)
 console.log(activeUsers)