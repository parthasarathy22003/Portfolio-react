import './App.css';
import About from './comp/about';
import Contact from './comp/contact';
import Home from './comp/home';
import Project from './comp/project';
import Skills from './comp/skills';

function App() {
  return (
    <div className="App">
     <Home/>
     <About/>
     <Skills/>
     <Project/>
     <Contact/>
    </div>
  );
}

export default App;

