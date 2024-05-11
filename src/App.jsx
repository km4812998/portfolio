import './App.css';
import './components/Navbar/Navbar.css';
import Navbar from './components/Navbar/Navbar.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import  './components/HeroSection/HeroSection.css';
import About from './components/About/About.jsx';
import './components/About/About.css';
import Skills from './components/Skills/Skills.jsx';
import './components/Skills/Skills.css';
import Projects from './components/Projects/Projects.jsx';
import './components/Projects/Projects.css';
import Contact from './components/Contact/Contact.jsx';
import './components/Contact/Contact.css';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection /> 
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
