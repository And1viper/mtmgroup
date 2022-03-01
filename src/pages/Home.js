// import PhantomNavbar from "../components/PhantomNavbar"
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom"

//Page Transition
import { motion } from "framer-motion";
import PageTransitions from "../components/PageTransition/PageTransitions"
import PageVariants from "../components/PageTransition/PageVariations"

//images
import FactoryImg from "../images/smoke-pipe-industry-factory.png"
import TechnicianImg from "../images/male-technician-repairing-computer-motherboard-wooden-desk.png"
import HvacBackground from "../images/background-hvac.jpg"
import TransportBackground from "../images/background-transport.jpg"
import BytovyeBackground from "../images/background-bytovye.jpg"
import Logos from "../images/logos.png"
import LogosMob from "../images/logos-mob.png"
import TechnicianImgMob from "../images/male-technician-repairing-computer-motherboard-wooden-desk-mob.png"

const Home = () => {
  return (
    <motion.div exit="out" animate="in" initial="initial" variants={PageVariants} transition={PageTransitions} className="container">

      <section className="block-main block-full-height block-flexbox">
        {/* <PhantomNavbar/> */}
        <Navbar/>

        <div className="vertical-center width">  
          <div className="block-inside-wrapper">
            <h2 className="text-main-md">ОБСЛУЖИВАНИЕ HVAC,<br/>ТРАНСПОРТНЫХ<br/>КОНДИЦИОНЕРОВ,<br/>БЫТОВЫХ КОНДИЦИОНЕРОВ</h2>
          </div>
        </div>
      </section>
      <Link className="home-links" to="/hvac">
        <section className="block-main block-bg-img block-full-height vertical-center" style={{ backgroundImage: `url(${HvacBackground})` }}>
          <div className="block-inside-wrapper">
            <h1 className="text-main">HVAC<br/>СИСТЕМЫ</h1>
            <ul className="text-supplement">
              <li>Продажа запчастей</li>
              <li>Обслуживание</li>
              <li>Ремонт</li>
              <li>Проектирование</li>
              <li>Монтаж с нуля</li>
            </ul>
          </div>
        </section>
      </Link>
      <Link className="home-links"  to="car-conditioner">
        <section className="block-main block-bg-img block-full-height vertical-center" style={{ backgroundImage: `url(${TransportBackground})` }}>
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
        </section>
      </Link>
      <Link className="home-links" to="home-conditioner">
        <section className="block-main block-bg-img block-full-height vertical-center" style={{ backgroundImage: `url(${BytovyeBackground})` }}>
          <div className="block-inside-wrapper">
            <h1 className="text-main">БЫТОВЫЕ<br/>КОНДИЦИОНЕРЫ</h1>
            <ul className="text-supplement">
              <li>Продажа запчастей</li>
              <li>Обслуживание</li>
              <li>Ремонт</li>
              <li>Проектирование</li>
              <li>Монтаж с нуля</li>
            </ul>
          </div>
        </section>
      </Link>
      <section className="block-main bg-black block-full-height vertical-center">
        <div className="block-inside-wrapper">
          <h1 className="text-main text-center">БЫСТРО.<br/>НАДЕЖНО.<br/>ЭФФЕКТИВНО.</h1>
        </div>
      </section>
      <section className="block-main block-last">
        <h1 className="text-main black">НАМ ДОВЕРЯЮТ</h1>
        <div className="flexbox">
          <div className="div-logos"><img className="logos" src={Logos} alt="partners logo"/></div>
          <p className="logos-desc text-supplement black">Компания MTM — надёжный помощник, который желает создать себя и своим близким наибольшее удобство с заботой о здоровье. На сегодняшний день мы предоставляем лучший выбор климатических систем. Приобрести кондиционер в компании MTM – надежно, рационально и рентабельно. Огромный ассортимент, демократичные цены и полный комплект всевозможных сопутствующих услуг по техническому обеспечению являются основными качествами нашей компании.</p>
          <div className="div-logos-mob"><img className="logos-mob" src={LogosMob} alt="partners logo"/></div>
        </div>
        <div className="flexbox">
          <div className="div-factory"><img src={FactoryImg} alt="factory"/></div>
          <div className="div-tech"><img src={TechnicianImg} alt="technician"/></div>
          <div className="div-tech-mob"><img src={TechnicianImgMob} alt="technician for mobile"/></div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;