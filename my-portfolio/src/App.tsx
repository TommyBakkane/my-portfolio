import './App.css';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Projects } from './components/projects/Projects';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Projects />
    </>
  );
}

export default App;
