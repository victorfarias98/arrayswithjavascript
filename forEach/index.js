/**
* PT-BR
* Esse método aplica uma função a cada elemento do array
* 
* EN-US
* This method applies a function to each element of the array.
*/
const exampleArray = [
  { id: 1, name: 'Victor' },
  { id: 2, name: 'Helena' },
  { id: 3, name: 'Yannael' },
]
exampleArray.forEach(example => console.log(example.name))
/* -------> Output : Victor
*                  Gabriel
*                  Farias
*/
const numbersArray = [1,2,3,4,5,6,7,8,9,10]
numbersArray.forEach(number => console.log(number * number))
/* -------> Output : 1
*                  4
*                  9
*                  16
*                  25
*                  36
*                  49
*                  64
*                  81
*                  100
*/