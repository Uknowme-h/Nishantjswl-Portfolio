import {BrowserRouter} from "react-router-dom";
import {About , Contact , Experience,CV, Hero, Navbar, Tech , Works , StarsCanvas} from './components';  
import { styles } from "./styles";

const App = ()=>{
  return (
   <BrowserRouter>
   <div className="relative z-0 bg-[#010038]">  
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <div className="bg-[#0c1022]">
        <Works/>
      </div>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
      <div className="relative z-0 bg-[#0c1022]">
      <StarsCanvas/>
          <CV/>
        
      </div>

   </div>
   </BrowserRouter>
  
  )
}

export default App
