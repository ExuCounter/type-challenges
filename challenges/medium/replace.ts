type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer A}${From}${infer B}` ? `${A}${To}${B}` : S;

type replaced = Replace<"fun very types", "fun", "awesome">; // expected to be 'types are awesome!'

export {};
