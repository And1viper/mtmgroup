// import PhantomNavbar from "../components/PhantomNavbar"
import Navbar from "../components/Navbar/Navbar";
import GalleryImages from "../components/GalleryImages";

//Page Transition
import { motion } from "framer-motion";
import PageTransitions from "../components/PageTransition/PageTransitions";
import PageVariants from "../components/PageTransition/PageVariations";

const Gallery = () => {
  return (
    <motion.div exit="out" animate="in" initial="initial" variants={PageVariants} transition={PageTransitions} className="container white">

      <section className="block-main">
        {/* <PhantomNavbar/> */}
        <Navbar/>
        
        <div className="gallery">
          <h1 className="text-main black">НАШИ РАБОТЫ</h1>
          <p className="">с 2014 года на объектах Тенгиза</p>
          <GalleryImages/>
        </div>
      </section>

    </motion.div>
  )
}

export default Gallery