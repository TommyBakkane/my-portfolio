import "./styles/App.css";
import { Contact } from './components/contact/Contact';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Projects } from './components/projects/Projects';
import { Skills } from './components/skills/Skills';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
