import React from "react";
import type { NextPage } from "next";
import Point from "./Point/Point";
import { TCoord1, TCoord2, TCoord3, TPointContainer } from "../Types/Graph";

const PointContainer: NextPage<TPointContainer> = ({ points, getCoords }) => {
  const xcoords: number[] = getCoords(-4, 4, 0);
  const ycoords: number[] = getCoords(-7, 7, 0);
  const zcoords: number[] = getCoords(-2, 2, 0);

  const ycoordmap = new Map<TCoord1, number>();

  const fillycoordmap = (Coord1: TCoord1) => {
    if (ycoordmap.has(Coord1)) {
      return ycoordmap.get(Coord1);
    } else {
      if (Coord1 === "T") {
        ycoordmap.set("T", ycoords[ycoords.length - 1]);
      } else {
        ycoordmap.set(Coord1, ycoords[Coord1]);
      }
      return ycoordmap.get(Coord1);
    }
  };
  const pointmap = (item: [TCoord1, TCoord2, TCoord3], i: number) => {
    const v: number = fillycoordmap(item[0])!;
    return (
      <Point
        Coord1={item[0]}
        v={v}
        Coord2={item[1]}
        Coord3={item[2]}
        xcoords={xcoords}
        zcoords={zcoords}
        key={i}
        getCoords={getCoords}
      />
    );
  };
  return <>{points.map((item, i) => pointmap(item, i))}</>;
};

export default PointContainer;
