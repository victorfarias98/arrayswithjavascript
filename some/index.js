/**
 * PT-BR
 * Esse método testa o array com a função passada como parâmetro, 
 * E retorna true se pelo menos um elemento dentro do array passar no teste da função
 * 
 * EN-US
 * This method tests the array with a function passed as a parameter. 
 * It will return true if at least one element matches the test and false for the opposite.
 * 
 */
const exampleArray = [1,2,3,4,5,6,7,8]
const checkArray = exampleArray.some(checker => checker === 1)
// console.log(checkArray)
//-------> Output : true

//Other examples
const users = [
    { id : Math.random() , firstName : 'Victor' , lastName : 'Farias' , email : 'vgfr456@gmail.com'},
    { id : Math.random() , firstName : 'Kevin' , lastName : 'Farias' , email : 'kevin_hfr@gmail.com'},
]
const checkUser = users.some(user => user.firstName === 'John')
// console.log(checkUser)
//-------> Output : false