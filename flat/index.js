/**
* PT-BR
* Esse método cria um novo array a partir de todos os elementos dentro do array base, incluindo elementos dentro de sub-array
* Vale lembrar que este método irá apenas em um nível de profundidade.
* 
* EN-US
* This method creates a new array that contains the elements holden on the sub-array and flat it into the new array. 
* Notice that, this method will go only one level depth.
* [[1, 2], [3, 4], 5]
*/

const exampleArray = [[1, 2], [3, 4], 5]
const newArray = exampleArray.flat()
// console.log(newArray)
//-------> Output : [1, 2, 3, 4, 5]

const arrayOfArrays = [[[1,2] , [3,4]] , [[5,6] , [7,8]]]
const arrayFlated = arrayOfArrays.flat()
// console.log(arrayFlated)
//-------> Output : [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ] ]
/* Explanation : The method moved the array up one level, that is, from an array of 3 levels = [[[]]] went to an array of 2 levels = [[]]
*  Explicação : O método subiu um nível o array, ou seja de um array de 3 niveis = [[[]]] foi para um array de 2 niveis = [[]]
*/