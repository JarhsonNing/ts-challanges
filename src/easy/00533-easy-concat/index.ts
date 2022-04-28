// Implement the JavaScript Array.concat function in the type system.
// A type takes the two arguments.
// The output should be a new array that includes inputs in ltr order

export type Concat<T extends any[], U extends any[]> = [...T, ...U]

type Result = Concat<[1], [2]> // expected to be [1, 2]
