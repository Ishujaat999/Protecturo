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

function App() {
  return (
    <>
      <Header />
      {/* <SliderDummy /> */}
      <OurBenefits />
      <OurStandards />
    </>
  );
}

export default App;
