
import { useRef, useState } from "react";
import { useGLTF, Outlines } from "@react-three/drei";

import { Select } from '@react-three/postprocessing';
import { useFrame } from "@react-three/fiber";

import { useScrollData } from '../UseScrollData';

// The jsx graph was auto-generated by: https://github.com/pmndrs/gltfjsx

function ObjSelection(props) {
  const [hovered, hover] = useState(false);
  const { setSkillHover, skillName } = props;

  const hoverChanged = (hoverState) => {
    if (hoverState) {
      setSkillHover(skillName);
    } else {
      setSkillHover(null);
    }
    hover(hoverState);
  }

  return (
    <Select enabled={hovered}>
      <mesh {...props}
        onPointerOver={(e) => { e.stopPropagation(); hoverChanged(true) }}
        onPointerOut={() => hoverChanged(false)}
        castShadow
        receiveShadow
      >
      <Outlines
        screenspace
        toneMapped={false}
        transparent
        opacity={hovered ? 0.75 : 0}
        color="yellow"
        thickness={6}
        />
      </mesh>
      {props.children}
    </Select>
  )
}


export default function SkillsModel(props) {
  const { setSkillHover } = props;
  const model = useRef(null);
  const { nodes, materials } = useGLTF("/docker_new.glb");
  const scrollData = useScrollData();

  useFrame(() => {
    if (scrollData.offset > 0.93) {
      model.current.rotation.y += 0.002;
    } else {
      model.current.rotation.y = 1.5 + scrollData.offset * 10;
    }
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
        skillName={"Javascript"}
        setSkillHover={setSkillHover}
      />
      <ObjSelection
        geometry={nodes.Cube001.geometry}
        material={materials["Material.002"]}
        position={[0, 0.734, -0.191]}
        skillName="Material.002"
        setSkillHover={setSkillHover}
      />
      <ObjSelection
        geometry={nodes.Cube002.geometry}
        material={materials["Material.laravel"]}
        position={[0.159, 0.734, -0.593]}
        skillName="Laravel"
        setSkillHover={setSkillHover}
      />
      <ObjSelection
        geometry={nodes.Cube003.geometry}
        material={materials["Material.aws"]}
        position={[0.351, 0.734, -0.241]}
        skillName="AWS Services"
        setSkillHover={setSkillHover}
      />
      <ObjSelection
        geometry={nodes.Cube004.geometry}
        material={materials["Material.Sass"]}
        position={[-0.349, 0.734, -0.241]}
        skillName="Sass/CSS"
        setSkillHover={setSkillHover}
      />
      <ObjSelection
        geometry={nodes.Cube005.geometry}
        material={materials["Material.solidity"]}
        position={[-0.423, 0.734, 0.11]}
        skillName="Solidity"
        setSkillHover={setSkillHover}
      />
      <ObjSelection
        geometry={nodes.Cube006.geometry}
        material={materials["Material.php"]}
        position={[0.406, 0.734, 0.109]}
        skillName="PHP"
        setSkillHover={setSkillHover}
      />
      <ObjSelection
        geometry={nodes.Cube007.geometry}
        material={materials["Material.007"]}
        position={[0, 0.734, 0.569]}
        skillName="Bootstrap"
        setSkillHover={setSkillHover}
      />
      <ObjSelection
        geometry={nodes.Cube008.geometry}
        material={materials["Material.node"]}
        position={[0.351, 0.734, 0.459]}
        skillName="Node JS"
        setSkillHover={setSkillHover}
      />
      <ObjSelection
        geometry={nodes.Cube009.geometry}
        material={materials["Material.tailwind"]}
        position={[-0.351, 0.734, 0.457]}
        skillName="Tailwind"
        setSkillHover={setSkillHover}
      />
      <ObjSelection
        geometry={nodes.Cube010.geometry}
        material={materials["Material.react"]}
        position={[-0.173, 1.07, 0.097]}
        skillName="React JS"
        setSkillHover={setSkillHover}
      />
      <ObjSelection
        geometry={nodes.Cube011.geometry}
        material={materials["Material.nextjs"]}
        position={[0.01, 1.069, -0.379]}
        skillName="Vue JS"
        setSkillHover={setSkillHover}
      />
      <ObjSelection
        geometry={nodes.Cube012.geometry}
        material={materials["Material.express"]}
        position={[-0.206, 0.734, -0.593]}
        skillName="Express"
        setSkillHover={setSkillHover}
      />
      <ObjSelection
        geometry={nodes.body_1.geometry}
        material={materials["Material.004"]}
        skillName="Docker"
        setSkillHover={setSkillHover}
      />
      <mesh
        geometry={nodes.body_2.geometry}
        material={materials["Material.005"]}
      />
    </group>
  );
}

useGLTF.preload("/docker_new.glb");