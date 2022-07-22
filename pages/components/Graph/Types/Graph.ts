type PrependNextNum<A extends Array<unknown>> = A["length"] extends infer T
  ? ((t: T, ...a: A) => void) extends (...x: infer X) => void
    ? X
    : never
  : never;

type EnumerateInternal<A extends Array<unknown>, N extends number> = {
  0: A;
  1: EnumerateInternal<PrependNextNum<A>, N>;
}[N extends A["length"] ? 0 : 1];

export type Enumerate<N extends number> = EnumerateInternal<
  [],
  N
> extends (infer E)[]
  ? E
  : never;

export type Range<FROM extends number, TO extends number> = Exclude<
  Enumerate<TO>,
  Enumerate<FROM>
>;

export type TCoord1 = number | "T";
export type TCoord2 = "A" | "B" | "C" | "D" | "E";
export type TCoord3 = Range<0, 9>;

export type TGraph = {
  points: [TCoord1, TCoord2, TCoord3][];
};

export type TPointContainer = {
  points: [TCoord1, TCoord2, TCoord3][];
  getCoords: (min: number, max: number, offset: number) => number[];
};

export type TPoint = {
  Coord1: TCoord1; //6 inch increments 0-78 & (T) TOP
  v: number;
  Coord2: TCoord2; //A/B/C/D/E
  Coord3: TCoord3; //Positions 1-9
  xcoords: number[];
  zcoords: number[];
  getCoords: (min: number, max: number, offset: number) => number[];
};

export type TGridContainer = {
  flipx: 1 | -1;
  flipy: 1 | -1;
  flipz: 1 | -1;
  getCoords: (min: number, max: number, offset: number) => number[];
};

export type TGrid = {
  axis: "depth" | "vertical" | "horizontal"; //depth, vertical, horizontal
  flipaxis: 1 | -1;
  fliplabel: 1 | -1;
  getCoords: (min: number, max: number, offset: number) => number[];
};
