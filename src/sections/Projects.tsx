
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
// import { Selection } from '@react-three/postprocessing'
import ProjectModel from '../models/ProjectModel.jsx';


export default function Projects() {
  return (
    <div className='flex flex-row justify-between mx-auto max-w-[1280px] sticky top-0'>
    <div className='w-1/2'>
      <h1 className='text-6xl font-bold'>DKM Projects</h1>
    </div>
    <div className='w-1/2'>
    <div id="canvas-div" className='relative aspect-square'>
      <Canvas dpr={[1, 2]} color='#fff' camera={{ position: [-5, 0, -15], fov: 55 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <directionalLight intensity={0.3} position={[0, 20, 6]} />
          <Suspense fallback={null}>
            <group rotation={[0, 3, 0]} position={[0, -0, 2]}>
              <ProjectModel />
            </group>
            <Environment preset="city" />
          </Suspense>
      </Canvas>
    </div>
    </div>

  </div>
  );
}