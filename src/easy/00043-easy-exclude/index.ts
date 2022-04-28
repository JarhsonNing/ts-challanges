type MyExclude<T, U> = T extends U ? never : T;
interface A {
    age: number;
    name: number
}

interface B {
    name: number
}
type C = MyExclude<B, A>


let a: C = {
    name: 1
}

export default MyExclude
