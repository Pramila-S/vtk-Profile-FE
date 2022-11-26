import "./App.css";
import Application from "./Components/Application/Application";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Specialization from "./Components/Specialization/Specialization";
import Fabrics from "./Components/Fabrics/Fabrics";
import Aboutus from "./Components/AboutUs/Aboutus";
import Reactga from "react-ga";
import { useEffect } from "react";

const TRACKING_ID = "G-FXLW85GX4L";
Reactga.initialize(TRACKING_ID);


function App() {
  useEffect(() => {
    Reactga.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <Navbar />
      <Fabrics />
      <Specialization />
      <Application />
      <Aboutus />
      <Contact />
    </>
  );
}

export default App;
