var arr = [0, 1];
var sum = 1;
function sumFibonacci(num) {
    var f1 = 0;
    var f2 = 1;
    var f3 = 0;
    for (var i = 2; i < num; i++) {
        f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
        arr.push(f3);
        sum += f3;
    }
    console.log(arr);
    console.log(sum);
}
sumFibonacci(5);
