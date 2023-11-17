
import React, { useRef, useState } from "react";
import { useGLTF, useScroll, useCursor, Outlines } from "@react-three/drei";
import { Select } from '@react-three/postprocessing';
import { useFrame } from "@react-three/fiber";

// The jsx graph was auto-generated by: https://github.com/pmndrs/gltfjsx

function ObjSelection(props) {
  const [hovered, hover] = useState(false);
  useCursor(hovered);
  return (
    <Select enabled={hovered}>
      <mesh {...props}
        onPointerOver={(e) => { e.stopPropagation(); hover(true) }}
        onPointerOut={() => hover(false)}
        castShadow
        receiveShadow
      >
      <Outlines
        screenspace
        toneMapped={false}
        transparent
        opacity={hovered ? 0.75 : 0}
        color="yellow"
        angle={Math.PI}
        thickness={6}
        />
      </mesh>
      {props.children}
    </Select>
  )
}


export default function SkillsModel(props) {
  const model = useRef(null);
  const { nodes, materials } = useGLTF("/docker_new.glb");
  
  useFrame(() => {
    // model.current.rotation.y += 0.005;
    // model.current.position.y = -(25 - data.offset*40);
    // model.current.position.x = -2 + data.offset*10;
    // model.current.position.z = 3 + (0.5 - data.offset) *15;
    model.current.rotation.y  += 0.002
    // model.current.rotation.x = 0.1;
    // model.current.rotation.x = data.offset;
    // console.log(25 - data.offset*25);
  });

  return (
    <group ref={model} {...props} dispose={null}>
      <mesh
        geometry={nodes.body001.geometry}
        material={materials["Material.003"]}
        position={[0, 0.001, 0]}
      />
      <ObjSelection
        geometry={nodes.Cube.geometry}
        material={materials["Material.js"]}
        position={[0, 0.734, 0.19]}
      />
      <ObjSelection
        geometry={nodes.Cube001.geometry}
        material={materials["Material.002"]}
        position={[0, 0.734, -0.191]}
      />
      <ObjSelection
        geometry={nodes.Cube002.geometry}
        material={materials["Material.laravel"]}
        position={[0.159, 0.734, -0.593]}
      />
      <ObjSelection
        geometry={nodes.Cube003.geometry}
        material={materials["Material.aws"]}
        position={[0.351, 0.734, -0.241]}
      />
      <ObjSelection
        geometry={nodes.Cube004.geometry}
        material={materials["Material.Sass"]}
        position={[-0.349, 0.734, -0.241]}
      />
      <ObjSelection
        geometry={nodes.Cube005.geometry}
        material={materials["Material.solidity"]}
        position={[-0.423, 0.734, 0.11]}
      />
      <ObjSelection
        geometry={nodes.Cube006.geometry}
        material={materials["Material.php"]}
        position={[0.406, 0.734, 0.109]}
      />
      <ObjSelection
        geometry={nodes.Cube007.geometry}
        material={materials["Material.007"]}
        position={[0, 0.734, 0.569]}
      />
      <ObjSelection
        geometry={nodes.Cube008.geometry}
        material={materials["Material.node"]}
        position={[0.351, 0.734, 0.459]}
      />
      <ObjSelection
        geometry={nodes.Cube009.geometry}
        material={materials["Material.tailwind"]}
        position={[-0.351, 0.734, 0.457]}
      />
      <ObjSelection
        geometry={nodes.Cube010.geometry}
        material={materials["Material.react"]}
        position={[-0.173, 1.07, 0.097]}
      />
      <ObjSelection
        geometry={nodes.Cube011.geometry}
        material={materials["Material.nextjs"]}
        position={[0.01, 1.069, -0.379]}
      />
      <ObjSelection
        geometry={nodes.Cube012.geometry}
        material={materials["Material.express"]}
        position={[-0.206, 0.734, -0.593]}
      />
      <mesh
        geometry={nodes.body_1.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        geometry={nodes.body_2.geometry}
        material={materials["Material.005"]}
      />
    </group>
  );
}

useGLTF.preload("/docker_new.glb");