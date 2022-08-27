// Implement the JavaScript Array.includes function in the type system.
// A type takes the two arguments. The output should be a boolean true or false.

export type Includes<T extends any[], K> = K extends keyof T ? true : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Wamuu'> // expected to be `false`

let a: isPillarMen = false;

console.log(a)
