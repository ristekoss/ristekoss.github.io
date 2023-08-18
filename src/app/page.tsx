'use client'
import { useState } from "react";
import About from "./sections/About";
import Contributors from "./sections/Contributors";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";
import NavigationBar from "./components/NavigationBar";
import OurProducts from "./sections/OurProducts";
import Partners from "./sections/Partners";
import Modal from "./components/Modal";

export default function Home() {

    const [modal, showModal] = useState(false);
    const [modalApp, setModalApp] = useState("");

    const handleModalApp = (app:string) => {
        setModalApp(app)
    }

    if (typeof window !== 'undefined'){
        if (modal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }
    
  return (
    <>  
        { modal &&

            <div className="fixed z-20 w-[100%] h-[100%] flex items-center justify-center ">
                <div className="fixed w-[100%] h-[100%] bg-black opacity-30" onClick={() =>showModal(false)}></div>
                <Modal modal={() => showModal(!modal)} modalApp={modalApp}/>
            </div>  
        }
        <div>
            <NavigationBar/>
            <HeroSection/>
            <About/>
            <OurProducts modal={() => showModal(!modal)} modalApp={handleModalApp}/>
            <Contributors/>
            <Partners />
            <Footer />
        </div>
      
    </>
  );
}
