import Navbar from './components/Navbar';
import Hello from './components/Hello';
import SectionTitle from './components/SectionTitle';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Courses from './components/Courses';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='page'>
        <Hello/>
        <SectionTitle title="Proyectos de hardware" image="soldering.png"/>
        <Projects type="hardware" id="hardware"/>
        <SectionTitle title="Proyectos de software" image="software.png"/>
        <Projects type="software" id="software"/>
        <SectionTitle title="Otros proyectos" image="hand.png"/>
        <Projects type="contenido" id="others"/>
        <SectionTitle title="Experiencia" image="list.png"/>
        <Experience id="experience"/>
        <SectionTitle title="Formación" image="list.png"/>
        <Courses id="courses"/>
      </div>
    </div>
  );
}

export default App;
