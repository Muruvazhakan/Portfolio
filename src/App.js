import logo from './logo.svg';
import './App.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { AnimatePresence } from "framer-motion";

import Navbar from './Component/Routes/Navbar/Navbar';
import Intro from './Component/Intro/Intro';
import About from './Component/About/About';
import Experience from './Component/Experience/Experience';
import Contact from './Component/Contact/Contact';
import Certification from './Component/Certification/Certification';
import photo from "./assets/Myphoto/Photo.jpg";

function App() {
  return (
    <AnimatePresence>
    <div className="App">
      <FloatingWhatsApp  phoneNumber="7338979499" accountName="Muruvazhakan" avatar={photo} chatMessage="Hi, Connect with me in Whatsapp"/>
     <Navbar />
     <Intro/>
     <About/>
     <Experience/>
     <Certification/>
     <Contact />
     
    </div>
    </AnimatePresence>
  );
}

export default App;
