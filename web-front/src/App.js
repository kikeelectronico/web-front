import Navbar from './components/Navbar';
import Hello from './components/Hello';
import SectionTitle from './components/SectionTitle';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Courses from './components/Courses';
import Footer from './components/Footer';

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
        <SectionTitle title="Habilidades" image="puzzle.png"/>
        <Skills id="skills"/>
        <SectionTitle title="Formación" image="book.png"/>
        <Courses id="courses"/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
