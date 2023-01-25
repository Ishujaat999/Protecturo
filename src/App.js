import "./App.css";
import "./Root.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import OurBenefits from "./components/OurBenefits";
import Features from "./components/Features";
import StayConnect from "./components/StayConnect";
import FAQs from "./components/FAQs";
function App() {
  return (
    <>
      <Header />
      <OurBenefits />
      <Features />
      <StayConnect />
      <FAQs/>
    </>
  );
}

export default App;