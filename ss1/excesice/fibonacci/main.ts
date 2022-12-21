let arr: number[] =[0,1];
let sum: number = 1;
function sumFibonacci(num: number) {
    let f1: number = 0;
    let f2: number = 1;
    let f3: number = 0;
    for (let i = 2; i < num; i++){
        f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
        arr.push(f3)
        sum += f3;
    }
    console.log(arr)
    console.log(sum)
}
sumFibonacci(5)



