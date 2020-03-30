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
const tri = function(n) {
    if(n <= 1) {
      return n;
    } 
    else {
     
      return n + tri(n - 1);
    }
  }
  tri(6)

  //string splitter drill
  



