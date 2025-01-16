// let n = 10; // Number of terms
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 2] + fib[i - 1]);
  }
  return fib;
}

console.log("fibonacci: ", fibonacci(5));

// recursive fibonacci
function recursiveFibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

function recursiveFibonacciArray(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(recursiveFibonacci(i));
  }
  return arr;
}

console.log("recursiveFibonacci: ", recursiveFibonacciArray(5));
//  0,1,1,2,3,5
