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

//find a way out of the maze and all the ways
const maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function escape(maze, str = '') {
    const rs = str.split('').filter(c => c === 'R').length;
    const ls = str.split('').filter(c => c === 'L').length;
    const us = str.split('').filter(c => c === 'U').length;
    const ds = str.split('').filter(c => c === 'D').length;
    const x = rs - ls;
    const y = ds - us;
  
    let up;
    let right;
    let down;
    let left;
    if (maze[y - 1]) up = maze[y - 1][x];
    right = maze[y][x + 1];
    if (maze[y + 1]) down = maze[y + 1][x];
    left = maze[y][x - 1];
  
    
    if ( 
      (up === undefined || up === '*') &&
      (right === undefined || right === '*') &&
      (down === undefined || down === '*') &&
      (left === undefined || left === '*')
    ) { return; }
    
    if (up === 'e') console.log(str + 'U');
    if (right === 'e') console.log(str + 'R');
    if (down === 'e') console.log(str + 'D');
    if (left === 'e') console.log(str + 'L');
  
    
    if (up && up !== '*') {
      const newMaze = [...maze].map(line => [...line]);
      newMaze[y][x] = '*';
      escape(newMaze, str + 'U');
    }
    if (right && right !== '*') {
      const newMaze = [...maze].map(line => [...line]);
      newMaze[y][x] = '*';
      escape(newMaze, str + 'R');
    }
    if (down && down !== '*') {
      const newMaze = [...maze].map(line => [...line]);
      newMaze[y][x] = '*';
      escape(newMaze, str + 'D');
    }
    if (left && left !== '*') {
      const newMaze = [...maze].map(line => [...line]);
      newMaze[y][x] = '*';
      escape(newMaze, str + 'L');
    }
  }
  
  escape(maze);

//anagrams
function anagram(str) {
    if (str.length < 2) {
      return str;
    } else {
      let shuffle = [];
      for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        if (str.indexOf(char) != i)
          continue;
        
        let moreLetters = str.slice(0, i) + str.slice(i + 1, str.length);
        
        for (let remainderLetters of anagram(moreLetters))
          shuffle.push(char + remainderLetters);
      }
      return shuffle;
    }
  }
  let thisString = 'abc';
  console.log(anagram(thisString));
  

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


