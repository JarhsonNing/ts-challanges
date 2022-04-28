// Implement the JavaScript Array.includes function in the type system.
// A type takes the two arguments. The output should be a boolean true or false.

export type Includes<T extends any[], K> = K

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

