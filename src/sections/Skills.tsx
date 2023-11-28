
import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import SkillsModel from '../3d-models/SkillsModel.jsx';
import { OrbitControls } from '@react-three/drei';
import CSSMouseTracker from '../components/CSSMouseTracker.js';


export default function Skills() {

  const [skill, setSkill] = useState<string | null>(null);

  return (
    <div className='flex flex-col justify-between mx-auto max-w-[1280px]'>
    <div className='w-full text-center'>
      <h1 className='text-6xl text-yellow-400 font-bold'>Skills</h1>
      <div className='text-xl text-gray m-5 text-balance'>
          My skills variously from backend to frontend and softwares. <br />
          <a className='font-bold text-lime-500' href='/vu_cv.pdf'>Download <span className='underline'>my CV</span></a> for more details.
      </div>
    </div>
    <div className='w-full'>
    <CSSMouseTracker className='relative no-bg mt-12'>
    { skill && <div className='skill-label font-bold py-2 px-4 shadow-sm text-gray-700'>{skill}</div> }
    <div id="canvas-skill" className='relative aspect-[4/5] md:aspect-[3/2] '>
      <Canvas dpr={[1, 2]} color='#fff' camera={{ position: [5, 10, 16], fov: 45 }}>
        <OrbitControls enablePan={false} enableZoom={false} />
        <ambientLight intensity={0.4} />
        <pointLight position={[-10, -10, -10]} intensity={0.2}/>
        <directionalLight intensity={0.3} position={[0, 20, 6]} />
        <Suspense fallback={null}>
          <SkillsModel setSkillHover={setSkill} scale={4} />
        </Suspense>
      </Canvas>
    </div>
    </CSSMouseTracker>
    </div>
    <div className='md:hidden h-[25vh]'>
    </div>
  </div>
  );
}