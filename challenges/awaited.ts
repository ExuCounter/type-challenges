type MyAwaited<T extends Promise<any>> = T extends Promise<infer P> ? P : never;

type ExampleType = Promise<string>;

type Result = MyAwaited<ExampleType>; // string

export {};
