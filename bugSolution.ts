function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, Number('2')); // Correct way to call the function
console.log(result); // Output: 3

function addSafe(a: number | string, b: number | string): number {
  if (typeof a === 'string') {
    a = Number(a);
  }
  if (typeof b === 'string') {
    b = Number(b);
  }
  return a + b; // Type safe addition
}

let resultSafe = addSafe(1, '2'); //Correct way to call the function
console.log(resultSafe); //Output: 3