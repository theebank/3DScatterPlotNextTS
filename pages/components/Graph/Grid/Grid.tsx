import type { NextPage } from "next";
import { Html } from "@react-three/drei";
import React, { useRef } from "react";

interface gridProps {
  axis: "depth" | "vertical" | "horizontal"; //depth, vertical, horizontal
  flipaxis: 1 | -1;
  fliplabel: 1 | -1;
  getCoords: (min: number, max: number, offset: number) => number[];
}

const BOX_GEOMETRY_ARGS = [90, 90, 0];
const MESH_STANDARD_COLOR = "rgb(181,208,232)";

const Grid: NextPage<gridProps> = ({
  axis,
  flipaxis,
  fliplabel,
  getCoords,
}) => {
  const mesh = useRef(null);

  const getGridHelperArgs = (divisions: number) => {
    return [90, divisions, 0xffffff, 0xffffff];
  };

  const verticalrows: number[] = getCoords(-7, 7, 4);
  const horizontalrows: number[] = getCoords(-4, 4, 0);
  const depthrows: number[] = getCoords(-2, 2, 0);

  return (
    //Depth axis
    (axis === "depth" && (
      <>
        {(flipaxis == 1 && (
          <gridHelper
            args={getGridHelperArgs(depthrows.length - 1)}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 0, -45 + 0.02]}
          />
        )) || (
          <gridHelper
            args={getGridHelperArgs(depthrows.length - 1)}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 0, 45 - 0.02]}
          />
        )}
        <mesh ref={mesh} position={[0, 0, -45 * flipaxis]}>
          <boxGeometry args={BOX_GEOMETRY_ARGS} />
          <meshStandardMaterial color={MESH_STANDARD_COLOR} />
          <>
            {depthrows.map((z, i) => (
              <Html position={[z, 50 * fliplabel, 0]} key={i}>
                <h4>{String.fromCharCode(65 + i)}</h4>
              </Html>
            ))}
          </>
        </mesh>
      </>
    )) ||
    //Vertical axis 0-13 + T
    (axis === "vertical" && (
      <>
        {(flipaxis === 1 && (
          <gridHelper
            args={getGridHelperArgs(verticalrows.length - 1)}
            rotation={[0, 0, Math.PI / 2]}
            position={[-45 + 0.02, 0, 0]}
          />
        )) || (
          <gridHelper
            args={getGridHelperArgs(verticalrows.length - 1)}
            rotation={[0, 0, Math.PI / 2]}
            position={[45 - 0.02, 0, 0]}
          />
        )}
        <mesh
          ref={mesh}
          rotation={[0, Math.PI / 2, 0]}
          position={[-45 * flipaxis, 0, 0]}
        >
          <boxGeometry args={BOX_GEOMETRY_ARGS} />
          <meshStandardMaterial color={MESH_STANDARD_COLOR} />
          <>
            {verticalrows.map((y, i) => (
              <Html position={[-45 * fliplabel, y, 0]} key={i}>
                {(i === 14 && <h6>T</h6>) || <h6>{i}</h6>}
              </Html>
            ))}
          </>
        </mesh>
      </>
    )) ||
    //Horizontal axis 1-9
    (axis === "horizontal" && (
      <>
        {(flipaxis === 1 && (
          <gridHelper
            args={getGridHelperArgs(horizontalrows.length - 1)}
            rotation={[0, Math.PI / 2, 0]}
            position={[0, -45 + 0.02, 0]}
          />
        )) || (
          <gridHelper
            args={getGridHelperArgs(horizontalrows.length - 1)}
            rotation={[0, Math.PI / 2, 0]}
            position={[0, 45 - 0.02, 0]}
          />
        )}

        <mesh
          ref={mesh}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          position={[0, -45 * flipaxis, 0]}
        >
          <boxGeometry args={BOX_GEOMETRY_ARGS} />
          <meshStandardMaterial color={MESH_STANDARD_COLOR} />
          <>
            {horizontalrows.map((x, i) => (
              <Html position={[x, 45 * fliplabel, 0]} key={i}>
                <h4>{i + 1}</h4>
              </Html>
            ))}
          </>
        </mesh>
      </>
    )) || <></>
  );
};
export default Grid;
