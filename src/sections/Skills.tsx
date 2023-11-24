
import { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import SkillsModel from '../models/SkillsModel.jsx';
import { OrbitControls } from '@react-three/drei';


export default function Skills() {
  return (
    <div className='flex flex-col justify-between mx-auto max-w-[1280px]'>
    <div className='w-full text-center'>
      <h1 className='text-6xl text-yellow-200 font-bold'>Skills</h1>
    </div>
    <div className='w-full'>
    <div id="canvas-div" className='relative aspect-[3/2]'>
      <Canvas dpr={[1, 2]} color='#fff' camera={{ position: [5, 10, 15], fov: 55 }}>
      <OrbitControls enablePan={false} enableZoom={false} />
        <ambientLight intensity={0.5} />
        {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
        <pointLight position={[-10, -10, -10]} intensity={0.2}/>
        {/* <pointLight position={[10, 10, 10]} intensity={1.5} /> */}
        <directionalLight intensity={0.3} position={[0, 20, 6]} />
        <Suspense fallback={null}>
          <SkillsModel scale={4.3} />
        </Suspense>
      </Canvas>
    </div>
    </div>
  </div>
  );
}