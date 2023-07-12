import './App.css';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Projects } from './components/projects/Projects';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
