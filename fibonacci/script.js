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

console.log(fibonacciIterative(1));