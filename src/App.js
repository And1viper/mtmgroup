// import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

//Page Transition
import { AnimatePresence } from "framer-motion"
import ScrollToTop from "./components/PageTransition/ScrollToTop"

//pages
import Home from "./pages/Home"
import Hvac from "./pages/Hvac"
import CarConditioner from "./pages/CarConditioner"
import HomeConditioner from "./pages/HomeConditioner"
import Gallery from "./pages/Gallery"

import { Routes, Route, useLocation } from 'react-router-dom'

function App() {
  let location = useLocation();

  return (
    <>
      {/* <Navbar /> */}
      <AnimatePresence exitBeforeEnter>
        <ScrollToTop/>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />}/>
            <Route path="/hvac" element={<Hvac />}/>
            <Route path="/car-conditioner" element={<CarConditioner />}/>
            <Route path="/home-conditioner" element={<HomeConditioner />}/>
            <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
        <Footer key="loh"/> 
      </AnimatePresence>
    </>
  );
}

export default App;
