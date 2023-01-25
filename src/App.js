import "./App.css";
import "./Root.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import OurBenefits from "./components/OurBenefits";
// import SliderDummy from "./components/SliderDummy";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurStandards from "./components/OurStandards";

import Features from "./components/Features";
import StayConnect from "./components/StayConnect";
import Global from "./components/Global";
function App() {
  return (
    <>
      <Header />
      {/* <SliderDummy /> */}
      <OurBenefits />
      <OurStandards />
      <OurBenefits />
      <Features />
      <StayConnect />
      <Global />
    </>
  );
}

export default App;
