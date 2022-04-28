// If we have a type which is wrapped type like Promise.
// 如果我们又一个类型被类似Promise包起来了
// How we can get a type which is inside the wrapped type?
// 我们怎么才能取到被包起来的那个类型呢
// For example if we have Promise<ExampleType> how to get ExampleType?
// 如果我们又一个类型被类似Promise包起来了

type WrappedType<T> = T extends Promise<infer K> ? WrappedType<K> : T

interface Test {
    name: string
}

type Test1 = Promise<Test>;

type Test2 = Promise<Test1>;

let a: WrappedType<Test2> = {
    name: '123'
}

export default WrappedType
