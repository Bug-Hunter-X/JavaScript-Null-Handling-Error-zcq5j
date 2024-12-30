function foo(a, b) {
  if (a === null && b === null) {
    return null; // Handle both null values
  } else if (a === null) {
    return b; // Return the non-null value
  } else if (b === null) {
    return a; // Return the non-null value
  } else {
    return a + b; // Perform the addition
  }
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: null
console.log(foo(undefined,2)); //Output: NaN
console.log(foo(2,undefined)); //Output: NaN