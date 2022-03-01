// import PhantomNavbar from "../components/PhantomNavbar"
import Navbar from "../components/Navbar/Navbar";
import ContactButton from "../components/ContactButton";

//Page Transition
import { motion } from "framer-motion";
import PageTransitions from "../components/PageTransition/PageTransitions"
import PageVariants from "../components/PageTransition/PageVariations"

import TransportBackground from "../images/background-transport.jpg"
import TransportImage from "../images/photo-1-transporthvac.png"

const Hvac = () => {
  return (
    <motion.div exit="out" animate="in" initial="initial" variants={PageVariants} transition={PageTransitions} className="container">

      <section className="block-main block-bg-img block-full-height block-flexbox" style={{ backgroundImage: `url(${TransportBackground})` }}>
        {/* <PhantomNavbar/> */}
        <Navbar navColor={true}/>

        <div className="vertical-center width">  
            <div className="block-inside-wrapper">
                <h1 className="text-main">ТРАНСПОРТНЫЕ КОНДИЦИОНЕРЫ</h1>
                <ul className="text-supplement">
                    <li>Продажа запчастей</li>
                    <li>Обслуживание</li>
                    <li>Ремонт</li>
                    <li>Проектирование</li>
                    <li>Монтаж с нуля</li>
                </ul>
            </div>
        </div>
      </section>

      <section className="block-main">
        <div className="block-inside-wrapper inside-page">
          <h1 className="text-main black">УСЛУГИ ПО ТРАНСПОРТНОМУ ХОЛОДУ</h1>
          <div className="page-flex">
              <div className="page-flex-main">
                <p className="text-supplement inside-page black">запчасти: компрессоры, фильтры обслуживание вентиляций, замена фильтров ремонт вентиляций проектирование вентиляционных систем монтаж с нуля</p>
                <div><ContactButton color="btn-accent">Оставить заявку</ContactButton></div>
              </div>
              <div className="page-flex-supplement">
                <img src={TransportImage} alt="TransportHvac"/>
              </div>
          </div>
        </div>
        
      </section>

    </motion.div>
  );
};

export default Hvac;
