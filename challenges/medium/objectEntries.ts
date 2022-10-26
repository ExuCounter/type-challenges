export type ObjectEntries<O extends object> = {
  [K in keyof O]: [K, O[K]]
}[keyof O]

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
