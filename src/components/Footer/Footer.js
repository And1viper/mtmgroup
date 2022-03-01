import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'

import FooterLinks from "./FooterLinks"
import ContactButton from "../ContactButton"

//Page Transition
import { motion } from "framer-motion";
import PageTransitions from "../PageTransition/PageTransitions"
import PageVariants from "../PageTransition/PageVariations"

import Aidalogo from "../../images/aidalogo.svg"
import WhatsApp from "../../images/whatsapp-icon.svg"
import Facebook from "../../images/facebook-icon.svg"
import Insta from "../../images/insta-icon.svg"

import AidalogoWhite from "../../images/aidalogo-white.svg"
import WhatsAppWhite from "../../images/whatsapp-icon-white.svg"
import FacebookWhite from "../../images/facebook-icon-white.svg"
import InstaWhite from "../../images/insta-icon-white.svg"

const Footer = () => {
    const [footerColor, setColor] = useState(true);
    
    let location = useLocation();

    useEffect (() => { 
        if(location.pathname !== "/gallery"){
            setColor(false);
        }
        else {
            setColor(true);
        }
    }, [location]);


  return (
    <motion.footer className={footerColor ? "white" : ""} exit="out" animate="in" initial="initial" variants={PageVariants} transition={PageTransitions} >
        <div className="footer">
            <div className="footer-main">
                <div className="footer-info">
                    <h1 className="footer-number">
                        8 702 858 5448
                    </h1>
                    <ContactButton color={footerColor ? "btn-black" : "btn-white"}/>
                </div>

                <div className="footer-links">
                    <div className="footer-nav">
                        <FooterLinks/>
                    </div>
                </div>
            </div>

            <div className="footer-supplement">
                <div className="footer-reference">
                    <img className="aida-img" src={footerColor ? AidalogoWhite : Aidalogo} alt="aidadesign"/>
                    <p className="aida-desc">Задизайнено в <a href="https://aidadesign.kz/">Студии AIDA.design</a><br/><a href="https://aidadesign.kz/">Информация о сайте</a></p>
                </div>
                <div className="footer-social">
                    <a href="https://www.whatsapp.com/"> <img width="42px" src={footerColor ? WhatsAppWhite : WhatsApp} alt="whatsapp-logo"/></a>
                    <a href="https://www.facebook.com/"> <img width="42px" src={footerColor ? FacebookWhite : Facebook} alt="facebook-logo"/></a>
                    <a href="https://www.instagram.com/"> <img width="42px" src={footerColor ? InstaWhite : Insta} alt="instagram-logo"/></a>
                </div>
            </div>
        </div>
    </motion.footer>
  );
};

export default Footer;
