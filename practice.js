const countSheep = function(num) {
    if (num === 0) {
        return "All sheep jumped over the fence";
    }
    console.log(num);
    countSheep(num-1);
};
countSheep(3);