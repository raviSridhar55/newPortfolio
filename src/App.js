import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Goal from './Components/Goal';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Goal />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
