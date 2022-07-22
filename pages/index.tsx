import type { NextPage } from "next";
import Graph from "./components/Graph/Graph";
import { TCoord1, TCoord2, TCoord3 } from "./components/Graph/Types/Graph";

const Home: NextPage = () => {
  const NUM_OF_LEVELS: number = 15;
  const NUM_OF_PLANES: number = 5;
  const NUM_OF_POSITIONS: number = 9;
  //Test Data, Can be Removed

  const boxes: [TCoord1, TCoord2, TCoord3][] = Array.from(
    { length: 40 },
    () => [
      Math.floor(Math.random() * NUM_OF_LEVELS) as TCoord1,
      String.fromCharCode(
        Math.floor(Math.random() * NUM_OF_PLANES) + 65
      ) as TCoord2,
      Math.floor(Math.random() * NUM_OF_POSITIONS) as TCoord3,
    ]
  );
  return (
    <div>
      <Graph points={boxes} />
    </div>
  );
};

export default Home;
