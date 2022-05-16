import Navbar from './components/Navbar';
import Hello from './components/Hello';
import SectionTitle from './components/SectionTitle';
import Projects from './components/Projects';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hello/>
      <SectionTitle title="Proyectos de hardware" image="soldering.png"/>
      <Projects type="hardware"/>
      <SectionTitle title="Proyectos de software" image="software.png"/>
      <Projects type="software"/>
      <SectionTitle title="Otros proyectos" image="list.png"/>
      <Projects type="contenido"/>
    </div>
  );
}

export default App;
