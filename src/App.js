import "./App.css";
import "./Root.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/Header";
import OurBenefits from "./components/OurBenefits";
import Features from "./components/Features";
import StayConnect from "./components/StayConnect";
import Global from "./components/Global";
function App() {
  return (
    <>
      {/* <Header /> */}
      <OurBenefits />
      <Features />
      <StayConnect />
      <Global />
    </>
  );
}

export default App;
