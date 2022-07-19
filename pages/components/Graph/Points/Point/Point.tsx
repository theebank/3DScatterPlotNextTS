import { Html, Line } from "@react-three/drei";
import type { NextPage } from "next";
import React, { useRef, useState } from "react";
import styles from '../../Graph.module.css'

interface pointProps{
    Coord1: number | 'T',//6 inch increments 0-78 & (T) TOP
    Coord2: "A"|"B"|"C"|"D"|"E",//A/B/C/D/E
    Coord3: 1|2|3|4|5|6|7|8|9,//Positions 1-9
    getCoords: (min: number, max: number, offset: number) => number[]
}
const Point: NextPage<pointProps> = ({Coord1, Coord2, Coord3, getCoords}) => {

    const xcoords: number[] = getCoords(-4,4,0);
    const ycoords: number[] = getCoords(-7,7,0);
    const zcoords: number[] = getCoords(-2,2,0);
    
    const v: any = ((Coord1==='T') && ycoords[14]) || ycoords[Coord1];//vertical coordinate
    const d: any = zcoords[Coord2.charCodeAt(0)-65];//depth coordinate
    const h: any = xcoords[Coord3];//horizontal coordinate

    
    const Point=(props: any)=> {
        const mesh = useRef(null)
        const [hovered, setHover] = useState(false)
        const [active, setActive] = useState(false)

        return (
          <>
            <mesh
              {...props}
              ref={mesh}
              onClick={(event) => setActive(!active)}
              onPointerOver={(event) => setHover(true)}
              onPointerOut={(event) => setHover(false)}>
              <sphereGeometry args={[2]} />
              <meshStandardMaterial color={hovered ? 'red' : 'blue'} />
              {hovered && 
                <>
                    <Html >
                        <div className={styles.Pointlabels}>
                            {((Coord1 ===14)&& 'T')||Coord1} 
                            {Coord2}
                            {Coord3+1} 
                        </div>
                    </Html> 
                    <Line points={[[0,0,0],[0,0,45-props.position[2]],[0,0,-45-props.position[2]]]}>
                      <lineBasicMaterial color = {0xFFFFFF} />
                    </Line>
                    <Line points={[[0,0,0],[0,45-props.position[1],0],[0,-45-props.position[1],0]]}>
                      <lineBasicMaterial color = {0xFFFFFF} />
                    </Line>
                    <Line points={[[0,0,0],[45-props.position[0],0,0],[-45-props.position[0],0,0]]}>
                      <lineBasicMaterial color = {0xFFFFFF} />
                    </Line>
                </>
            
      }

            </mesh>
           
          </>
        )
      }
    return(
        <>
            <Point position = {[d,v,-h]} />
        </>
        
    )
}
export default Point