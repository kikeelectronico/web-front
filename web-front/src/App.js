import Navbar from './components/Navbar';
import Hello from './components/Hello';
import SectionTitle from './components/SectionTitle';
import Projects from './components/Projects';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='page'>
        <Hello/>
        <SectionTitle title="Proyectos de hardware" image="soldering.png" id="hardware"/>
        <Projects type="hardware"/>
        <SectionTitle title="Proyectos de software" image="software.png" id="software"/>
        <Projects type="software"/>
        <SectionTitle title="Otros proyectos" image="list.png" id="others"/>
        <Projects type="contenido"/>
      </div>
    </div>
  );
}

export default App;
