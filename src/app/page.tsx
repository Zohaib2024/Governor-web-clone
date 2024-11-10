import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Corecol from "./components/Corecol";
import Footer from "./components/Footer";
import Advcol from "./components/Advcol";


export default function Home() {
  return (
    <div className="">   
     
     <Hero />
      <Info />
 
     <Corecol />
     <Advcol/>
    
    
    </div>
  );
}
