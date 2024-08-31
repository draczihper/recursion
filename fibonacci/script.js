// Fibonacci

function findFibonacciNumbersIterative(n) {
    let a = 0;
    let b = 1;
    let fibonacciArray = [a, b];

    for (let i = 2; i <= n; i++){
        let next = a + b;
        a = b;
        b = next;

        fibonacciArray.push(next);
    }
    return fibonacciArray;
}
// console.log(fibonacciIterative(1)); // [0, 1]


function fibonacciRecursive(n) {
    return n <= 1 ? n : fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
console.log(fibonacciRecursive(5)); //5

function findFibonacciNumbersRecursive(n) {
    const fibonacciNumbers = [];
    for (let i = 0; i < n; i++){
        fibonacciNumbers.push(fibonacciRecursive(i));
    }
    return fibonacciNumbers;
}
// console.log(findFibonacciNumbersRecursive(10)); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]