type FirstArray<A extends any[]> = A extends string | number ? A[0] : never;

type arr1 = [];
type arr2 = [3, 2, 1];

type head1 = FirstArray<arr1>; // expected to be never
type head2 = FirstArray<arr2>; // expected to be 3

export {};
