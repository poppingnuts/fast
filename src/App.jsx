import {  Link  } from "react-router-dom";



import {
  About,
  Contact,
  Experience,
  
  Hero,
  Navbar,
  
  Works,
  StarsCanvas,
} from "./components";



import { calling, whtsapp2 } from "./assets";


const App = () => {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        
          <Navbar />
  
        
          <Hero />
    
        </div>
        
        <About />
    
        
        <Experience />
    
       
        
        <Works />
  
    
        <div className="relative z-0">
        
          <Contact />
  
        
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
