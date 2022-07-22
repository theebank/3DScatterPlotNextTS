import React from "react";
import type { NextPage } from "next";
import Grid from "./Grid";
import { TGridContainer } from "../Types/Graph";

const GridContainer: NextPage<TGridContainer> = ({
  flipx,
  flipy,
  flipz,
  getCoords,
}) => {
  return (
    <>
      <Grid
        axis="depth"
        flipaxis={flipz}
        fliplabel={flipy}
        getCoords={getCoords}
      />
      <Grid
        axis="vertical"
        flipaxis={flipx}
        fliplabel={flipz}
        getCoords={getCoords}
      />
      <Grid
        axis="horizontal"
        flipaxis={flipy}
        fliplabel={flipx}
        getCoords={getCoords}
      />
    </>
  );
};

export default GridContainer;
