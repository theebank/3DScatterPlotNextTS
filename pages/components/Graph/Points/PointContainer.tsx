import React from "react";
import type { NextPage } from "next";
import Point from "./Point/Point";
import { dosReadCoord1, dosReadCoord2, dosReadCoord3 } from "../Graph";
interface pointContainerProps {
  points: (dosReadCoord1 | dosReadCoord2 | dosReadCoord3)[];
  getCoords: (min: number, max: number, offset: number) => number[];
}

const PointContainer: NextPage<pointContainerProps> = ({
  points,
  getCoords,
}) => {
  console.log(
    new Array(256)
      .fill(0)
      .map((_, i) => i)
      .join(" | ")
  );
  return (
    <>
      {points.map((item, i) => (
        <Point
          Coord1={item[0]}
          Coord2={item[1]}
          Coord3={item[2]}
          key={i}
          getCoords={getCoords}
        />
      ))}
    </>
  );
};

export default PointContainer;
