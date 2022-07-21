import type { NextPage } from "next";
import Graph from "./components/Graph/Graph";
import {
  dosReadCoord1,
  dosReadCoord2,
  dosReadCoord3,
} from "./components/Graph/GraphT";

const Home: NextPage = () => {
  const NUM_OF_LEVELS: number = 15;
  const NUM_OF_PLANES: number = 5;
  const NUM_OF_POSITIONS: number = 9;
  //Test Data, Can be Removed

  const boxes: [dosReadCoord1, dosReadCoord2, dosReadCoord3][] = Array.from(
    { length: 40 },
    () => [
      Math.floor(Math.random() * NUM_OF_LEVELS) as dosReadCoord1,
      String.fromCharCode(
        Math.floor(Math.random() * NUM_OF_PLANES) + 65
      ) as dosReadCoord2,
      Math.floor(Math.random() * NUM_OF_POSITIONS) as dosReadCoord3,
    ]
  );
  return (
    <div>
      <Graph points={boxes} />
    </div>
  );
};

export default Home;
