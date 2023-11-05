import './App.css'
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Productos } from './components/Productos';


function App() {
 
  return (
    <>
      <Navbar/>
      <Hero/>
      <Productos/>
      <Footer/>
    </>
  );
}

export default App
