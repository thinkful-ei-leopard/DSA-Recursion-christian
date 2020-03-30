//counting sheep drill
const countSheep = function(num) {
    if (num === 0) {
        console.log("All sheep jumped over the fence")
        return;
    }
    console.log(`${num}: Another sheep jumps over the fence`);
    countSheep(num-1);
};
countSheep(3);

//power calculator drill
const powerCalc = function(b, e) {
    if (b, e < 0) {
        console.log("exponent should be >= 0")
        return;
    }

    console.log(Math.pow(b, e));
}
powerCalc(10, 2)
powerCalc(10, -2)

//reverse string drill
const reverseString = function(string) {
    if(string === "") {
        return;
    }
        console.log(reverseString(string.substr(1)) + string.charAt(0));
        return;
}
reverseString("hello")

//nth triangular number drill
const nthTriangularNumber = function(n) {
    if (n === 1) {
      return 1;
    }
    return n + nthTriangularNumber(n - 1);
  }
  console.log(nthTriangularNumber(4));

//string splitter drill
function stringSplitter(str, separator='/') {
    if(str.length === 0){
      return [''];
    }
  
    const char = str[0];
    if(char === separator){
      return ['', ...stringSplitter(str.slice(1))];
    }
    const newArray = stringSplitter(str.slice(1));
    newArray[0] = char + newArray[0];
    return newArray;
  }
  console.log(stringSplitter('02/20/2020'));

//fibonacci
function fibonacci(num) {
    if (num <= 1) {
        return num;
    }
    return fibonacci(num-1) + fibonacci(num-2)
}
console.log(fibonacci(13))


//factorial
function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num-1);
}
console.log(factorial(5))

//find a way out of the maze
let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function escape() {
    
}

//find all the ways out of the maze


//anagrams


//organization chart


//binary drill
 function binaryRep(num) {
     if(num === 0) {
         return '';
     }
     const binary = num % 2;
     return binaryRep(Math.floor(num/2)) + binary
 }
 console.log(binaryRep(25))


