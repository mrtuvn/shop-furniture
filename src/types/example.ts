type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

type Example = {
  readonly a: string;
  readonly b: number;
};

export type Result = Mutable<Example>;

const example: Result = {
  a: "test",
  b: 1,
};
