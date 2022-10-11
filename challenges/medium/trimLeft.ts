type TrimLeft<S extends string, Answer = S> = S extends ` ${infer P}`
  ? TrimLeft<P>
  : Answer;

type trimed = TrimLeft<"  Hello World  ">; // expected to be 'Hello World  '

export {};
