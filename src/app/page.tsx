import About from "./sections/About";
import Contributors from "./sections/Contributors";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";
import NavigationBar from "./components/NavigationBar";
import OurProducts from "./sections/OurProducts";
import Partners from "./sections/Partners";

export default function Home() {
  return (
    <div>
      <NavigationBar/>
      <HeroSection/>
      <About/>
      <OurProducts />
      <Contributors/>
      <Partners />
      <Footer />
    </div>
  );
}
