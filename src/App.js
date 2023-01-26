import "./App.css";
import "./Root.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";
import OurBenefits from "./components/OurBenefits";
import OurStandards from "./components/OurStandards";
import Features from "./components/Features";
import StayConnect from "./components/StayConnect";
import Global from "./components/Global";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

import SliderDummy from "./components/SliderDummy";
// import OurStandards from "./components/OurStandards";
import Faq from "./components/Faq";
import Connectivity from "./components/Connectivity";
import OurProducts from "./components/OurProducts";
import { useEffect, useState } from "react";
import HowIt from "./components/HowIt";
import OurBenifit from "./components/OurBenifit";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("fix-screen");
    }, 2400);
  }, []);
  AOS.init({
    once: true,
    // disable: "mobile",
  });
  return (
    <>
      {loading && <Preloader />}
      <Header />
      <OurBenefits />
      <OurStandards />
      <Connectivity />
      <OurProducts />
      <HowIt />
      <OurBenifit />
      <Features />
      <StayConnect />
      <Faq />
      <Global />
      <Footer />
    </>
  );
}

export default App;
