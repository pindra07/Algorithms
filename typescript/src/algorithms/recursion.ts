/*   Definition
A process (a function in our case) that calls itself
- Base Case
- the recursive function (on different set of data)
*/

 // Sum Range
function sumRange(num: number): number {
  if (num === 1) return 1;
  return num + sumRange(num - 1) 
}
console.log(sumRange(9))


// factorial

//iteratively factorial
function i_factorial(num: number): number {
  var start: number = 1
  for (var i = num; i > 0; i--) {
   start = start * i
  }
  return start
}
console.log("interative factorial", i_factorial(5))

// recursively factorial
function r_factorial(num: number): number {
  if (num === 0) {
    return 1
  }
  return num * r_factorial(num-1)
}
console.log("recursive factorial", r_factorial(5))
  
// Helper Method Recursion
