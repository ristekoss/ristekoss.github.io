import About from "./components/About";
import Contributors from "./components/Contributors";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/NavigationBar";
import OurProducts from "./components/OurProducts";
import Partners from "./components/Partners";

export default function Home() {
  return (
    <div>
        <NavigationBar/>
        <HeroSection/>
        <About/>
        <OurProducts/>
        <Contributors/>
        <Partners/>
        <Footer/>
    </div>
  )
}
