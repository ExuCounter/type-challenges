type MyExclude<A extends string, B extends string> = A extends B ? never : A;

type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'

export {};
