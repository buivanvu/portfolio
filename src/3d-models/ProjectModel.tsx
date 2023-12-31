
import { Html, useGLTF  } from '@react-three/drei'
import { useThree, useFrame } from "@react-three/fiber";
import { useRef, useContext, useEffect, useState } from 'react'
import { useScrollData } from '../UseScrollData';
import { ScrollContext } from '../ScrollManager';



export default function ProjectModel(props) {
  const group = useRef(null);
  const screenGroupRef = useRef(null);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: @react-three/drei didn't fully support typescript yet
  const { nodes, materials } = (useGLTF('/mac-draco.glb'));
  const { gl } = useThree();
  const [page, setPage] = useState<number>(0)

  const scrollData = useScrollData();
  const offset: number = useContext(ScrollContext);

  useFrame(() => {
    group.current.rotation.y = (scrollData.offset/1.3) - 0.2;
    screenGroupRef.current.rotation.x = Math.max(2 - scrollData.offset * 8, -0.1);
  });

  useEffect(() => {
    if (offset >= 0 && offset < 0.4 ) {
      setPage(0);
    }
    if (offset >= 0.4 && offset < 0.6 ) {
      setPage(1);
    }
    if (offset >= 0.6) {
      setPage(2);
    }
  }, [offset]);

  // The jsx graph was auto-generated by: https://github.com/pmndrs/gltfjsx
  return (
    <group ref={group} {...props} dispose={null}>
      <group ref={screenGroupRef} rotation-x={1.7} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh geometry={nodes['Cube008_2'].geometry}>
            <Html portal={{ current: gl.domElement.parentNode as HTMLElement }} className="content" rotation-x={-Math.PI / 2} position={[0, 0.05, 0.01]} transform occlude>
                <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                    { page === 0 && <img width={1000} height={635} className='animate-fade p-1 pt-2' src='/addx_rs.png'/> }
                    { page === 1 && <img width={1000} height={640} className='animate-fade p-1 pt-2' src='/cfj_sm.png'/> }
                    { page === 2 && <img width={1000} height={640} className='animate-fade p-1 pt-2' src='/olm_rs.png'/> }
                </div>
              </Html>
          </mesh>
        </group>
      </group>
      <group rotation-x={0.25}>
        <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
        <group position={[0, -0.1, 3.39]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
          <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
        </group>
        <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
      </group>
    </group>
  )
}

useGLTF.preload("/mac-draco.glb");
