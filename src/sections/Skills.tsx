
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
      <h1 className='text-6xl text-yellow-400 font-bold mt-3'>Skills</h1>
      <div className='text-md md:text-xl text-gray m-5 text-balance'>
          My skills is variously from backend to frontend and softwares. <br />
          <a className='font-bold text-lime-500' href='/cv_vu.pdf'>Tap to view <span className='underline'>my CV</span></a> for more details about skills and working experiences.
      </div>
    </div>
    <div className='w-full'>
    <CSSMouseTracker className='relative no-bg mt-12'>
    { skill && <div className='skill-label font-bold py-2 px-4 shadow-sm '>{skill}</div> }
    <div id="canvas-skill" className='relative aspect-[10/11] md:aspect-[4/3] lg:-mt-9'>
      <Canvas dpr={[1, 2]} color='#fff' camera={{ position: [5, 10, 16], fov: 45 }}>
        <OrbitControls enablePan={false} enableZoom={false}  maxPolarAngle={1.5} minPolarAngle={0.4} />
        <ambientLight intensity={0.4} />
        <pointLight position={[-10, -10, -10]} intensity={0.2}/>
        <directionalLight intensity={0.3} position={[0, 20, 6]} />
        <Suspense fallback={null}>
          <SkillsModel setSkillHover={setSkill} scale={4.1} />
        </Suspense>
      </Canvas>
    </div>
    </CSSMouseTracker>
    </div>
  </div>
  );
}