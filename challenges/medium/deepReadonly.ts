type DeepReadonly<T extends object> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type Todo = DeepReadonly<X>; // should be same as `Expected`

const todo: Todo = {
  x: {
    a: 1,
    b: "hi",
  },
  y: "hey",
};

todo.x.a = 1;

export {};
