import "./App.css";
import "./Root.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";
import OurBenefits from "./components/OurBenefits";
import Features from "./components/Features";
import StayConnect from "./components/StayConnect";
function App() {
  return (
    <>
      <Header />
      <OurBenefits />
      <Features />
      <StayConnect />
    </>
  );
}

export default App;
