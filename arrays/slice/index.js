/*
* PT-BR
* O método deve retornar uma cópia parcial de um array 
* O primeiro parâmetro é a posição inicial e o segundo parâmetro é a posição final. 
* Se só a posição inicial for passada então a cópia é feita a partir da posição inicial até o fim do array.
*
* EN-US
* This method must return a shallow copy of an array
* The first param is the start position and the second param is the end position.
* If the second param is not passed, the copy starts from the first param and ends at the end of the array
*/

const origin = [0,1,2,3,4,5];
const resultTwoParams = origin.slice(2,4);
console.log(resultTwoParams);
//-------> Output : [2,3] 

const resultOneParam = origin.slice(4);
console.log(resultOneParam);
//-------> Output : [4,5]