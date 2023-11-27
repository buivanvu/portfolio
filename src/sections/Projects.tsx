
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { motion } from "framer-motion";

import ProjectModel from '../models/ProjectModel.jsx';
import CSSMouseTracker from '../components/CSSMouseTracker.js';
import AnimatedText from '../components/AnimatedText.js';

export default function Projects() {
  return (
    <div className='relative'>
      <div className='flex flex-col lg:flex-row flex-wrap justify-start lg:justify-between mx-auto max-w-[1280px] h-screen sticky top-0 pointer-events-none'>
        <div className='w-full lg:w-1/2 pointer-events-none'>
          <div className='hidden md:block text-2xl lg:text-4xl font-bold py-3 text-emerald-700 auto-bg pt-6'>Featured Projects</div>
        </div>
        <div className='w-full lg:w-1/2 flex flex-col lg:justify-center'>
          <div id="canvas-project" className='relative aspect-square md:pt-0'>
            <div className='absolute w-full md:hidden'>
              <div className='text-center text-lg text-purple-500 bg-gray-900 py-2'>FEATURED PROJECTS</div>
            </div>
            <Canvas camera={{ position: [-4.5, 0.1, -16.6], fov: 47 }}>
              <ambientLight intensity={0.2} />
              <pointLight position={[10, 10, 10]} intensity={.8} />
              <directionalLight intensity={0.3} position={[0, 20, 6]} />
              <Suspense fallback={null}>
                <group rotation={[0, Math.PI, 0]} position={[0, 0, 1]}>
                  <ProjectModel />
                </group>
                <Environment preset="city" />
              </Suspense>
            </Canvas>
          </div>
        </div>

      </div>
      <div className='flex flex-col justify-between mx-auto max-w-[1280px] p-5 md:p-0'>
        <div className='h-screen lg:w-1/2'>
          <AnimatedText delay={0.5} className='font-bold tracking-tighter text-7xl pr-1 my-6 w-fit addx'>ADDX</AnimatedText>
          <motion.div initial={{ y: 120, opacity: .1 }} 
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: .5,
              },
            }}>
            <CSSMouseTracker className='text-2xl py-2 md:text-4xl font-bold text-gray bg-clip-text text-transparent leading-normal tracking-normal '>
              a platform that <br />
              offers access to world-class <br />
              private market investments <br />
              powered by blockchain.
            </CSSMouseTracker>
            <div className='text-xl text-muted mt-3'><span className='tracking-tighter'>Role as:</span> <strong>Fullstack Developer</strong></div>
          </motion.div>
        </div>
        <div className='h-screen lg:w-1/2'>
          <AnimatedText delay={0.5} className='font-bold pb-1 tracking-tighter text-5xl md:text-6xl my-5 w-fit cfj'>Car from Japan</AnimatedText>
          <motion.div initial={{ y: 120 }} 
            whileInView={{
              y: 0,
              transition: {
                duration: .5,
              },
            }}>
            <CSSMouseTracker className='text-2xl py-2 md:text-4xl font-bold text-gray bg-clip-text text-transparent leading-normal tracking-normal '>
              ecommerce platform<br/>
              which sell & export used<br/>
              cars from Japan to<br />
              other countries.
            </CSSMouseTracker>
            <div className='text-xl text-muted mt-3'><span className='tracking-tighter'>Role as:</span> <strong>Fullstack Developer</strong></div>
          </motion.div>
        </div>
        <div className='h-screen lg:w-1/2'>
        <AnimatedText delay={0.5} className='font-bold tracking-tighter text-6xl my-6 w-fit olm'>Online Math</AnimatedText>
          <motion.div initial={{ y: 120 }} 
            whileInView={{
              y: 0,
              transition: {
                duration: .5,
              },
            }}>
            <CSSMouseTracker className='text-2xl md:text-4xl py-2 font-bold text-gray bg-clip-text text-transparent leading-normal tracking-tight'>
              <div>e-learning platform -</div>
              <div>my very first journey to the</div>
              web developments world<br />
              since I were a student at HNUE
            </CSSMouseTracker>
            <div className='text-lg text-muted mt-3'><span className='tracking-tighter'>Role as:</span> <strong>Co-Founder, System Design & Engineer</strong></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
