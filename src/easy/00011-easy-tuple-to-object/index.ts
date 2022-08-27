type TupleToObject<T extends readonly any[]> = {
    [P in T[number]]: P
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y']

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

let a: result = {
    tesla: "tesla",
    "model 3": "model 3",
    "model X": "model X",
    "model Y": "model Y"
}
console.log(a)

type GetParamType<T extends Function> = T extends (...args: infer Args) => unknown ? Args : never

type Func = (s: string) => string
type Test = GetParamType<Func>
let t: Test

type GetReturnType<T extends Function> = T extends (...args: any[]) => infer R ? R : never
