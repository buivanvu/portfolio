import './App.css'
import { ScrollManager } from './ScrollManager.js';
import About from './sections/About.js';
import Projects from './sections/Projects.js';
import Skills from './sections/Skills.js';

function App() {
  return (
    <div>
      <ScrollManager>
        <div className='flex flex-row justify-center'>
          <div className='mx-auto max-w-[1280px]'>
            <About />
          </div>
        </div>
        <Projects />
        <Skills />
      </ScrollManager>
    </div>
  )
}

export default App;
