/**
* PT-BR
* Este método preenche todos os elementos de uma determinada matriz com o mesmo valor,
* de um índice inicial (padrão 0) para um índice final (padrão array.length).
* 
* EN-US
* This method fills all the elements of a given array with the same value, 
* from a start index (default 0) to an end index (default array.length). 
*/


// O primeiro arguemento (0) é o valor que vai preencher os indices
// O segundo argumento (1) é o indicie inicial onde vai ser preenchido com o valor do primeiro argumento
// O terceiro argumento (3) é o indice final ( último indice ) onde vai ser preenchido com o valor do primeiro argumento
// The first argument (0) is the value
// The second argument (1) is the starting index
// The third argument (3) is the ending index
const exampleArray = [1, 2, 3, 4, 5]
const newArray = exampleArray.fill(0, 1, 3)
// console.log(newArray)
//-------> Output : [1, 0, 0, 4, 5]

// O primeiro arguemento ('Naruto') é o valor que vai preencher os indices
// O segundo argumento (0) é o indicie inicial onde vai ser preenchido com o valor do primeiro argumento
// O terceiro argumento (4) é o indice final ( último indice ) onde vai ser preenchido com o valor do primeiro argumento
// The first argument ('Naruto') is the value
// The second argument (0) is the starting index
// The third argument (4) is the ending index
const exampleArrayTwo = ['Sasuke', '', '', '']
const newArrayTwo = exampleArrayTwo.fill('Naruto', 0, 4)
// console.log(newArrayTwo)
//-------> Output : [1, 0, 0, 4, 5]