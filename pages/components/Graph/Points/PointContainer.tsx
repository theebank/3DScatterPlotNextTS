import React from "react";
import type { NextPage } from "next";
import Point from "./Point/Point";
import { dosReadCoord1, dosReadCoord2, dosReadCoord3 } from "../GraphT";
interface pointContainerProps {
  points: [dosReadCoord1, dosReadCoord2, dosReadCoord3][];
  getCoords: (min: number, max: number, offset: number) => number[];
}

const PointContainer: NextPage<pointContainerProps> = ({
  points,
  getCoords,
}) => {
  const xcoords: number[] = getCoords(-4, 4, 0);
  const ycoords: number[] = getCoords(-7, 7, 0);
  const zcoords: number[] = getCoords(-2, 2, 0);

  const ycoordmap = new Map<dosReadCoord1, number>();

  const fillycoordmap = (Coord1: dosReadCoord1) => {
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
  const pointmap = (
    item: [dosReadCoord1, dosReadCoord2, dosReadCoord3],
    i: number
  ) => {
    const Coord1: number = fillycoordmap(item[0])!;
    return (
      <Point
        Coord1={Coord1}
        Coord2={item[1].charCodeAt(0) - 65}
        Coord3={item[2]}
        xcoords={xcoords}
        ycoords={ycoords}
        zcoords={zcoords}
        key={i}
        getCoords={getCoords}
      />
    );
  };
  console.log(ycoordmap);
  return <>{points.map((item, i) => pointmap(item, i))}</>;
};

export default PointContainer;
