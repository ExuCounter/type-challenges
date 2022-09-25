type MyOmit<T extends object, O extends keyof T> = {
  [K in keyof T as K extends O ? never : K]: T[K];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};

export {};
