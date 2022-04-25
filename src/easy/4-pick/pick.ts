/* _____________ 测试用例 _____________ */
// @ts-ignore
import type { Equal, Expect } from '@type-challenges/utils'

type TestPick<T, K extends keyof T> = {
    [p in K]: T[p]
}

type cases = [
    Expect<Equal<Expected1, TestPick<Todo, 'title'>>>,
    Expect<Equal<Expected2, TestPick<Todo, 'title' | 'completed'>>>,
    // @ts-expect-error
    TestPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
    title: string
    description: string
    completed: boolean
}

interface Expected1 {
    title: string
}

interface Expected2 {
    title: string
    completed: boolean
}
