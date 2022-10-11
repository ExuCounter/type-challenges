type Trim<S extends string, O = S> = S extends ` ${infer P}`
  ? Trim<P>
  : S extends `${infer P} `
  ? Trim<P>
  : O;

type trimmed = Trim<"     Hello World  ">; // expected to be 'Hello World'

export {};
