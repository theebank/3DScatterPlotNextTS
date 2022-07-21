import type { NextPage } from 'next'
import Graph from './components/Graph/Graph'


const Home: NextPage = () => {
  const NUM_OF_LEVELS: number = 15;
  const NUM_OF_PLANES: number = 5;
  const NUM_OF_POSITIONS: number = 9;
  //Test Data, Can be Removed
  
  const boxes: (number|string|number)[][] = Array.from({length: 40}, () => [
    Math.floor(Math.random() * NUM_OF_LEVELS),
    String.fromCharCode(Math.floor(Math.random() * NUM_OF_PLANES)+65),
    Math.floor(Math.random() * NUM_OF_POSITIONS)
  ]);
  return (
   <div>
      <Graph points = {boxes} dLevels = {NUM_OF_LEVELS} dPlanes = {NUM_OF_PLANES} dPositions = {NUM_OF_POSITIONS}/>
    </div>
  )
}

export default Home
