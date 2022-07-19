import type {NextPage} from "next";
import React, { useRef, useState } from "react";
import styles from './Graph.module.css'
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Grid from "./Grid/Grid";
import Point from "./Points/Point";

interface graphProps{
    points: any[][]
}

const Graph: NextPage<graphProps> = ({points}) => {
    const [Flipx, setFlipx] = useState(1);
    const [Flipy, setFlipy] = useState(1);
    const [Flipz, setFlipz] = useState(1);

    

    const ocRef = useRef(null)

    function ResetCamera(){
        ocRef.current.reset()
    }
    function CameraFlip(){
        useFrame(({camera}) => {
            if(camera.position.x<=-40){
                setFlipx(-1)
            }else{setFlipx(1)}
            if(camera.position.y<=-40){
                setFlipy(-1)
            }else{setFlipy(1)}
            if(camera.position.z<=-40){
                setFlipz(-1)
            }else{setFlipz(1)}
        })
        return null
    }
    return(
        <div className={styles.scene}>
            <button onClick={ResetCamera} className ={styles.resetcambutton}> Reset Camera</button>
            <Canvas
                shadows={true}
                className = {styles.canvas}
                camera = {{
                    position: [90,90,90]
                }}
            >
                <OrbitControls ref ={ocRef} />
                <CameraFlip />
                <ambientLight />
                <Grid axis = 'depth' flipaxis={Flipz} fliplabel = {Flipy}/>
                <Grid axis = 'vertical' flipaxis={Flipx} fliplabel = {Flipz}/>
                <Grid axis = 'horizontal' flipaxis={Flipy} fliplabel = {Flipx}/>
                {points.map((item,i)=> <Point Coord1={item[0]} Coord2 = {item[1]} Coord3 = {item[2]} key = {i}/>)}

            </Canvas>
        </div>
    )
}
export default Graph;