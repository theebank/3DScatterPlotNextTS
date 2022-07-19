import type { NextPage } from "next";
import {Html} from "@react-three/drei"
import React, { useRef } from "react";

interface gridProps{
    axis: String,//depth, vertical, horizontal
    flipaxis: any,
    fliplabel: any
}
var verticalrows: any[] = [];
for(var i = -7;i<=7;i++){
    verticalrows.push(45/7*i+4)
}
var horizontalrows: any[] = [];
for(var i = -4;i<=4;i++){
    horizontalrows.push(45/4*i)
}
const Grid: NextPage<gridProps> = ({axis, flipaxis, fliplabel}) => {
    const mesh = useRef(null)
    return(
        //Depth axis
        (axis==='depth' &&
            <>  
            {((flipaxis==1) &&
                <gridHelper 
                args = {[90,4,0xFFFFFF,0xFFFFFF]}
                rotation = {[Math.PI/2,0,0]}
                position = {[0,0,-45+0.02]}
                />
                ) ||
                <gridHelper 
                args = {[90,4,0xFFFFFF,0xFFFFFF]}
                rotation = {[Math.PI/2,0,0]}
                position = {[0,0,45-0.02]}
                />}

                <mesh ref = {mesh} position = {[0,0,-45*flipaxis]}>
                    <boxGeometry args={[90,90,0]} />
                    <meshStandardMaterial color={'rgb(181, 208, 232)'} />
                    <>
                        <Html position = {[-45,50*fliplabel,0]}>
                            <h4>A</h4>
                        </Html>
                        <Html position = {[-22.5,50*fliplabel,0]}>
                            <h4>B</h4>
                        </Html>
                        <Html position = {[0,50*fliplabel,0]}>
                            <h4>C</h4>
                        </Html>
                        <Html position = {[22.5,50*fliplabel,0]}>
                            <h4>D</h4>
                            </Html>
                        <Html position = {[45,50*fliplabel,0]}>
                            <h4>E</h4>
                        </Html>
                    </>
                </mesh>
            </>
        ) ||
        //Vertical axis 0-13 + T
        (axis==='vertical' &&
            <>
            {((flipaxis===1)&&
                <gridHelper 
                args = {[90,14,0xFFFFFF,0xFFFFFF]}
                rotation = {[0,0,Math.PI/2]}
                position = {[-45+0.02,0,0]}
                />
                ) ||
                <gridHelper 
                args = {[90,14,0xFFFFFF,0xFFFFFF]}
                rotation = {[0,0,Math.PI/2]}
                position = {[45-0.02,0,0]}
                />}
                <mesh ref = {mesh} rotation = {[0,Math.PI/2,0]} position = {[-45*flipaxis,0,0]}>
                    <boxGeometry args={[90,90,0]} />
                    <meshStandardMaterial color={'rgb(181, 208, 232)'} />
                    <>
                        {verticalrows.map((y,i) => 
                            <Html position = {[-45*fliplabel,y,0]} key = {i}>
                                {((i===14)&& <h6>T</h6>) ||<h6>{i}</h6>}
                                
                            </Html>)}
                    </>

                </mesh>

            </>
        ) || 
        //Horizontal axis 1-9
        (axis ==='horizontal' &&
            <>
                {((flipaxis===1) &&
                <gridHelper 
                args = {[90,8,0xFFFFFF,0xFFFFFF]}
                rotation = {[0,Math.PI/2,0]}
                position = {[0,-45+0.02,0]}
                />
                ) ||
                <gridHelper 
                args = {[90,8,0xFFFFFF,0xFFFFFF]}
                rotation = {[0,Math.PI/2,0]}
                position = {[0,45-0.02,0]}
                />}

                <mesh ref = {mesh} rotation = {[Math.PI/2,0,-Math.PI/2]} position = {[0,-45 * flipaxis,0]}>
                    <boxGeometry args={[90,90,0]} />
                    <meshStandardMaterial color={'rgb(181, 208, 232)'} />
                    <>
                    {horizontalrows.map((x,i)=>
                    <Html position = {[x,45*fliplabel,0]} key = {i}>
                        <h4>{i+1}</h4>
                    </Html>)}
                    </>
                </mesh>
            </>
        ) || <></>
    )
}
export default Grid