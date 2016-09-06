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

//concat method
var zero = 0;
var positiveNumbers = [1,2,3];
var negativeNumbers = [-1, -2, -5];
var numbers = negativeNumbers.concat(zero, positiveNumbers);
console.log(numbers);
