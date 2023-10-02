
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {

  return (
    <div className='snap-y snap-mandatory h-screen w-screen flex flex-col overflow-x-hidden'>
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
