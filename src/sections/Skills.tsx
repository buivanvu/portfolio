
import { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import SkillsModel from '../models/SkillsModel.jsx';
import { OrbitControls } from '@react-three/drei';


export default function Skills() {
  return (
    <div className='flex flex-col justify-between mx-auto max-w-[1280px]'>
    <div className='w-1/2'>
      <h1 className='text-6xl'>Skills</h1>
    </div>
    <div className='w-full'>
    <div id="canvas-div" className='relative aspect-square'>
      <Canvas dpr={[1, 2]} color='#fff' camera={{ position: [5, 10, 10], fov: 55 }}>
      <OrbitControls enablePan={false} enableZoom={false} />
        <ambientLight intensity={0.5} />
        {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
        <pointLight position={[-10, -10, -10]} intensity={0.2}/>
        {/* <pointLight position={[10, 10, 10]} intensity={1.5} /> */}
        <directionalLight intensity={0.3} position={[0, 20, 6]} />
        <Suspense fallback={null}>
          <SkillsModel scale={2.5} />
        </Suspense>
      </Canvas>
    </div>
    </div>
  </div>
  );
}