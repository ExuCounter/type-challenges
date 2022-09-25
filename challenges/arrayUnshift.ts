type ArrayUnshift<A extends any[], K extends any> = [K, ...A];

type Result = ArrayUnshift<[1, 2], 0>; // [0, 1, 2,]

export {};
