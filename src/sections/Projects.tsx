
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { motion } from "framer-motion";
// import { Selection } from '@react-three/postprocessing'
import ProjectModel from '../models/ProjectModel.jsx';
import CSSMouseTracker from '../components/CSSMouseTracker.js';


export default function Projects() {
  return (
    <>
    <div className='flex flex-row justify-between mx-auto max-w-[1280px] sticky top-0 pointer-events-none'>
    <div className='w-1/2 pointer-events-none'>
      <h1 className='text-6xl font-bold py-8'>Featured projects</h1>
    </div>
    <div className='w-1/2'>
    <div id="canvas-div" className='relative aspect-square'>
      <Canvas dpr={[1, 2]} color='#fff' camera={{ position: [-5, 0, -15], fov: 55 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={.8} />
        <directionalLight intensity={0.3} position={[0, 20, 6]} />
          <Suspense fallback={null}>
            <group rotation={[0, 3, 0]} position={[-0.5, -0, 2]}>
              <ProjectModel />
            </group>
            <Environment preset="city" />
          </Suspense>
      </Canvas>
    </div>
    </div>

  </div>
  <div className='flex flex-col justify-between mx-auto max-w-[1280px]'>
    <div className='h-screen w-1/2'>
        <CSSMouseTracker className='mouse-tracker font-bold tracking-tighter bg-clip-text text-transparent text-8xl my-6 addx'>ADDX</CSSMouseTracker>
        <motion.div
          initial={{
            backgroundSize: '0%',
          }}
          whileInView={{
            backgroundSize: '100%',
            transition: {
              duration: 1,
              delay: 0.6,
            },
          }}
          className='project-desc text-4xl font-bold bg-clip-text'>a platform that</motion.div>
      <motion.div
          initial={{
            backgroundSize: '0%',
          }}
          whileInView={{
            backgroundSize: '100%',
            transition: {
              duration: 1,
              delay: 1.2,
            },
          }}
          className='project-desc text-4xl font-bold bg-clip-text'>offers access to world-class</motion.div>
        <motion.div
          initial={{
            backgroundSize: '0%',
          }}
          whileInView={{
            backgroundSize: '100%',
            transition: {
              duration: 1,
              delay: 1.5,
            },
          }}
          className='project-desc text-4xl font-bold bg-clip-text'
          >private market investments</motion.div>
        <motion.div
          initial={{
            backgroundSize: '0%',
          }}
          whileInView={{
            backgroundSize: '100%',
            transition: {
              duration: 1,
              delay: 1.8,
            },
          }}
          className='project-desc text-4xl font-bold bg-clip-text'
          >powered by blockchain.</motion.div>
      </div>
      <div className='h-screen w-1/2'>
        <div className='text-6xl font-bold my-6' >Car From Japan</div>
        <div className='text-4xl font-bold my-6' >ADDX  is an investment platform that offers access to world-class private market investments in fractions made possible with blockchain.</div>
      </div>
      <div className='h-screen w-1/2'>
        <div className='text-6xl font-bold my-6' >Online Math</div>
        <div className='text-4xl font-bold my-6' >ADDX  is an investment platform that offers access to world-class private market investments in fractions made possible with blockchain.</div>
      </div>
  </div>
  </>
  );
}