import type { NextPage } from 'next'
import Graph from './components/Graph/Graph'


const Home: NextPage = () => {
  //Test Data, Can be Removed
  const two = ["A","B","C","D","E"]
  const boxes: (number|string|number)[][] = Array.from({length: 40}, () => [
    Math.floor(Math.random() * 15),
    String.fromCharCode(Math.floor(Math.random() * 5)+65),
    Math.floor(Math.random() * 9)
  ]);
  return (
   <div>
      <Graph points = {boxes}/>
    </div>
  )
}

export default Home
