import {  Link  } from "react-router-dom";
import { Suspense, lazy } from "react";
import { StarsCanvas } from "./components/canvas";

const About =lazy(()=>import("./components/About"));
const Contact =lazy(()=>import("./components/Contact"));
const Experience =lazy(()=>import("./components/Experience"));
const Hero =lazy(()=>import("./components/Hero"));
const Navbar =lazy(()=>import("./components/Navbar"));

const Works =lazy(()=>import("./components/Works"));

import { calling, whtsapp2 } from "./assets";


const App = () => {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Suspense fallback="">
          <Navbar />
        </Suspense>
        <Suspense fallback="">
          <Hero />
          </Suspense>
        </div>
        <Suspense fallback="">
        <About />
          </Suspense>
        <Suspense fallback="">
        <Experience />
          </Suspense>
       
        <Suspense fallback="">
        <Works />
        </Suspense>
    
        <div className="relative z-0">
        <Suspense fallback="">
          <Contact />
        </Suspense>
        
          <StarsCanvas />
        </div>
        <div className="flex justify-center text-gray-400 text-lg font-semibold"> 
          <Link to="/privacy">
           Privacy Policy
          </Link>
        </div>
        <div style={{ position: 'fixed', bottom: '50px', right: '20px' }}>
          <a href="https://wa.me/+918130320763">
            <img src={whtsapp2} alt="whtsapp" className="w-16 h-16 stic object-contains" />
          </a>
        </div>
        <div style={{ position: 'fixed',bottom:"50px",left:"20px"}}>
          <a href="tel:+918130320763">
            <img src={calling} alt="calling" className="w-16 h-16 stic object-contains" />
          </a>
        </div>
      </div>

    </>
  );
};

export default App;
