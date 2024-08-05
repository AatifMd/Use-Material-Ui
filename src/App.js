import Navbar from './components/Navbar';
import './App.css';
import MainSection from './components/MainSection';
import About from './components/About';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Teacher from './components/Teacher';
import Footer from './components/Footer';

function App() {
  return (
   <>
   <Navbar/>
   <MainSection/>
   <About/>
   <Courses/>
   <Teacher/>
   <Contact/>
   <Footer/>
   </>
  );
}

export default App;
