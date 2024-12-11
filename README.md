# Type Error in TypeScript Function

This example demonstrates a common type error that can occur in TypeScript when passing arguments of the incorrect type to a function.

## Bug
The `add` function is defined to accept two numbers and return a number. However, in the line `let result = add(1, '2');`, a string ('2') is passed as the second argument. This causes a type error because the function expects a number, not a string.

## Solution
The solution is to ensure that both parameters passed to the `add` function are of type number. This can be done by either converting the string to a number using `parseInt` or `Number` or by using type guards to check the types of parameters before performing the addition operation.
