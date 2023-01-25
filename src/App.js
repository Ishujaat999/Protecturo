import "./App.css";
import "./Root.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";
import OurBenefits from "./components/OurBenefits";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurStandards from "./components/OurStandards";
import Features from "./components/Features";
import StayConnect from "./components/StayConnect";
import Global from "./components/Global";
import Footer from "./components/Footer";
import SliderDummy from "./components/SliderDummy";
// import OurStandards from "./components/OurStandards";
import Faq from "./components/Faq";
import Connectivity from "./components/Connectivity";
import OurProducts from "./components/OurProducts";
function App() {
  return (
    <>
      <Header />
      <OurBenefits />
      <OurStandards />
      {/* <SliderDummy /> */}
      <Connectivity />
      <OurProducts />
      <Features />
      <StayConnect />
      <Global />
      <Footer />
      <Faq />
    </>
  );
}

export default App;
