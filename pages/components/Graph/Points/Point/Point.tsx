import { Html, Line } from "@react-three/drei";
import type { NextPage } from "next";
import React, { useRef, useState } from "react";
import styles from "../../Graph.module.css";
import { dosReadCoord1, dosReadCoord2, dosReadCoord3 } from "../../GraphT";

interface pointProps {
  Coord1: number; //6 inch increments 0-78 & (T) TOP
  Coord2: number; //A/B/C/D/E
  Coord3: dosReadCoord3; //Positions 1-9
  xcoords: number[];
  ycoords: number[];
  zcoords: number[];
  getCoords: (min: number, max: number, offset: number) => number[];
}
const Point: NextPage<pointProps> = ({
  Coord1,
  Coord2,
  Coord3,
  xcoords,
  ycoords,
  zcoords,
  getCoords,
}) => {
  const v: number = ycoords[Coord1]; //vertical coordinate
  const d: number = zcoords[Coord2]; //depth coordinate
  const h: number = xcoords[Coord3]; //horizontal coordinate

  const Point = (props: any) => {
    const mesh = useRef(null);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    return (
      <>
        <mesh
          {...props}
          ref={mesh}
          onClick={() => setActive(!active)}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        >
          <sphereGeometry args={[2]} />
          <meshStandardMaterial color={hovered ? "red" : "blue"} />
          {hovered && (
            <>
              <Html>
                <div className={styles.Pointlabels}>
                  {(Coord1 === 14 && "T") || Coord1}
                  {Coord2}
                  {Coord3 + 1}
                </div>
              </Html>
              {/*Ignore the warnings on each line component, 
              solution is to add 120+ properties, but is functional
              without each property */}
              <Line
                points={[
                  [0, 0, 0],
                  [0, 0, 45 - props.position[2]],
                  [0, 0, -45 - props.position[2]],
                ]}
              >
                <lineBasicMaterial color={0xffffff} />
              </Line>
              <Line
                points={[
                  [0, 0, 0],
                  [0, 45 - props.position[1], 0],
                  [0, -45 - props.position[1], 0],
                ]}
              >
                <lineBasicMaterial color={0xffffff} />
              </Line>
              <Line
                points={[
                  [0, 0, 0],
                  [45 - props.position[0], 0, 0],
                  [-45 - props.position[0], 0, 0],
                ]}
              >
                <lineBasicMaterial color={0xffffff} />
              </Line>
            </>
          )}
        </mesh>
      </>
    );
  };
  return (
    <>
      <Point position={[d, v, -h]} />
    </>
  );
};
export default Point;
