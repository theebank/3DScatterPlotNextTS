import { Html, Line } from "@react-three/drei";
import type { NextPage } from "next";
import React, { useRef, useState } from "react";
import styles from '../Graph.module.css'

interface pointProps{
    Coord1: any,//Positions 1-9
    Coord3: any,//6 inch increments 0-78 & (T) TOP
    Coord2: string,//A/B/C/D/E
}
const Point: NextPage<pointProps> = ({Coord1, Coord2, Coord3}) => {
    var xs: any[] = [];
    var ys: any[] = [];
    var zs: any[] = [];
    for(var i = -4;i<=4;i++){
        xs.push(45/4*i)
    }
    for(var i = -7;i<=7;i++){
        ys.push(45/7*i)
    }
    for(var i = -2;i<=2;i++){
        zs.push(45/2*i)
    }
    var v: any = ((Coord1==='T') && ys[14]) || ys[Coord1]
    var d: any = zs[Coord2.charCodeAt(0)-65]
    var h: any = xs[Coord3];

    
    function Box(props: any) {
        const mesh = useRef(null)
        const [hovered, setHover] = useState(false)
        const [active, setActive] = useState(false)
    
        console.log(props.position[0],props.position[1],props.position[2])
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
            <Box position = {[d,v,-h]} />
        </>
        
    )
}
export default Point