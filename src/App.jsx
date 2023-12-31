import "./App.css";

//import Aos
import Aos from "aos";
import "aos/dist/aos.css";

//import components
import Hero from "./components/Hero";
import Header from "./components/Header";
import SectionOne from "./components/about-us/SectionOne";
import Functionalities from "./components/Functionalities";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    document.title = 'Condominios';
  }, []);
  //initialize aos
  Aos.init({
    duration: 800,
    offset: 100,
  });
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <SectionOne />
      <Functionalities />
      <Pricing />
      <Footer />
      <ContactForm />
      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
};

export default App;
