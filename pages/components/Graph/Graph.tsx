import type {NextPage} from "next";
import React, { useRef, useState } from "react";
import styles from './Graph.module.css'
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Grid from "./Grid/Grid";
import Point from "./Points/Point/Point";
import PointContainer from "./Points/PointContainer";
import GridContainer from "./Grid/GridContainer";

interface graphProps{
    points: (number|string|number)[][]
}

const Graph: NextPage<graphProps> = ({points}) => {
    
    
    const [Flipx, setFlipx] = useState<1 | -1>(1);
    const [Flipy, setFlipy] = useState<1 | -1>(1);
    const [Flipz, setFlipz] = useState<1 | -1>(1);

    

    const ocRef = useRef(null)

    const getCoords =(min: number,max: number, offset: number): number[]=>{
        const arr: number[] = []
        for(let i = min;i<=max;i++){
            arr.push(45/max*i+offset)
        }
        return arr
    }
    const ResetCamera=() =>{
        ocRef.current.reset()
    }
    const CameraFlip=()=>{
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
                <GridContainer flipx={Flipx} flipy = {Flipy} flipz = {Flipz} getCoords = {getCoords}/>
                <PointContainer points={points} getCoords={getCoords}/>
            </Canvas>
        </div>
    )
}
export default Graph;