const countSheep = function(num) {
    if (num === 0) {
        console.log("All sheep jumped over the fence")
        return;
    }
    console.log(`${num}: Another sheep jumps over the fence`);
    countSheep(num-1);
};
countSheep(3);

