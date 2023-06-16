import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Experience/>

      <SocialLinks/>
    </div>
  );
}

export default App;
