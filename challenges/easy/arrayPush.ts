type ArrayPush<A extends any[], K extends string> = [...A, K];

type Result = ArrayPush<[1, 2], "3">; // [1, 2, '3']

export {};
