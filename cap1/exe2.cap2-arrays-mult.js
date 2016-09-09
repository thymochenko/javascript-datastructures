//var averageTempDay1 = [72,75,79,79,81,81];
//var averageTempDay2 = [81,79,75,75,73,72];
//bad form
var averageTemp = [];
averageTemp[0] = [72,75,79,79,81,81];
averageTemp[1] = [81,79,75,75,73,72];

//dia 1
averageTemp[0] = [];
averageTemp[0] [0] = 72;
averageTemp[0] [1] = 75;
averageTemp[0] [2] = 79;
averageTemp[0] [3] = 79;
averageTemp[0] [4] = 81;
averageTemp[0] [5] = 81;

//dia 2
averageTemp[1] = [];
averageTemp[1] [0] = 81;
averageTemp[1] [1] = 79;
averageTemp[1] [2] = 75;
averageTemp[1] [3] = 75;
averageTemp[1] [4] = 73;
averageTemp[1] [5] = 72;

function printMatrix(myMatrix){
  for(var i = 0; i < myMatrix.length; i++){
    for(var j = 0; j < myMatrix[i].length; j++){
      console.log(myMatrix[i][j])
    }
  }
}

console.log("Usando a função imprimeMatrix");
printMatrix(averageTemp);

var matrix3x3x3 = [];
for (var i = 0; i < 3; i++) {
  matrix3x3x3[i] = [];
  for (var j = 0; j < 3; j++){
    matrix3x3x3[i][j] = [];
    for (var z = 0; z < 3; z++){
      matrix3x3x3[i][j][z] = i + j + z;
    }
  }
}

console.log("Imprimindo o array de 3 dimensões");
console.log(matrix3x3x3);
//Funções
//concat method
var zero = 0; //posição inicial para contatenar
var positiveNumbers = [1,2,3];
var negativeNumbers = [-1, -2, -5];
var numbers = negativeNumbers.concat(zero, positiveNumbers);
console.log(numbers);

//Iterators function
console.log(" ----- Iterators function -----");
var	isEven	=	function(x)	{
				//	returns	true	if	x	is	a	multiple	of	2.
				console.log(x);
				return	(x	%	2	==	0)	?	true	:	false;
};

var	numbers	=	[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log("fuction {every}");
numbers.every(isEven);
console.log("fuction {some}");
numbers.some(isEven);
console.log("fuction {forEeach}");
numbers.forEach(function(x){
  console.log((x % 2 == 0));
});
//o método map() aplica uma função de calback sobre todos os elementos
//de um array e retorna um novo array.
console.log("function {map}");
var myMap = numbers.map(isEven);

//O método filter() cria um novo array com todos os elementos que passaram ao
//teste (retornaram true) implementado pela função fornecida (callback).
console.log("function {filter}");
var evenFilter = numbers.filter(isEven);
console.log(evenFilter);

//O reduce  executa a função de callback uma vez para cada elemento
//presente no array, excluindo furos (valores indefinidos) ,
//recebendo quatro argumentos: o valor inicial (ou o valor do
//callback anterior), o valor do elemento corrente, o índice
// corrente e o array onde a iteração está ocorrendo.
console.log("function {reduce}");
numbers.reduce(function(previous, current, index){
  return previous + current;
});

console.log(numbers);


console.log("function {reverse}");
var newNumbers = [1,2,3, 10, 20, 12, 11, 8, 9, 13];
console.log(newNumbers.reverse());

//ordena os arrays segundo uma função de calback
console.log("function {sort}");
console.log(newNumbers.sort(function(a,b){
  return a - b;
}));

var friends = [
  {name: 'john', age:30},
  {name: 'Ana', age:20},
  {name: 'Cris', age:18}
];

function comparePerson(a,b){
  if(a.age < b.age){
    return -1;
  }
  if(a.age > b.age){
    return 1;
  }
  return 0;
}

console.log(friends.sort(comparePerson));
