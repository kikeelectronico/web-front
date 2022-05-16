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
      <Projects/>
    </div>
  );
}

export default App;
