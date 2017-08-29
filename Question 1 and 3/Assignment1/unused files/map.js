var arr = [1, 2, 3, 4, 5];

var ar1 = arr.map(function(val, ind, arr){
    console.log("arr[" + ind + "]: " + Math.pow(val,2));
    return val;
});

console.log();
console.log(ar1);
console.log(arr);