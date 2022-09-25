type Includes<A extends any[], K extends string> = K extends A[number]
  ? true
  : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Santana">; // expected to be `true`

export {};
