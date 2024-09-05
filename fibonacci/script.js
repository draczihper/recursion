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


let k = 0
function fibonacciRecursive(n) {
    return n <= 1 ? n : fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
// console.log(fibonacciRecursive(8)); //21

function findFibonacciNumbersRecursive(n) {
    const fibonacciNumbers = [];
    for (let i = 0; i < n; i++){
        console.log("This was printed recursively", k++);
        fibonacciNumbers.push(fibonacciRecursive(i));
    }
    return fibonacciNumbers;
}
console.log(findFibonacciNumbersRecursive(8)); //[0, 1, 1, 2, 3, 5, 8, 13]