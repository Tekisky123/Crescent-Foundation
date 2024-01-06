import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import BloodCenter from "./Pages/BloodCentre";
import Traininginstitute from "./Pages/traininginstitute";
import CrescentSchool from "./Pages/CrescentSchool";
import ClothingCenter from "./Pages/ClothingCenter";
import AboutUs from "./Pages/AboutUs";

// app
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blood-Center" element={<BloodCenter />} />
        <Route path="/Tcf-vocational-training-institute" element={<Traininginstitute />} />
        <Route path="/crescent-public-school" element={<CrescentSchool />} />
        <Route path="/crescent-clothing-center" element={<ClothingCenter />} />
        <Route path="/About" element={<AboutUs />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
