type MyAwaited<T extends Promise<any>> = T extends Promise<infer P> ? P : never;

type ExampleType = Promise<number>;

type Result = MyAwaited<ExampleType>; // string

export {};
