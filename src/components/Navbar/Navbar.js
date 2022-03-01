import { useState,/* useEffect */} from 'react';
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom'

import NavLinks from './NavLinks';
import Button from '../Button';

import Logo from '../../images/mtmgrouplogo.svg';
import LogoWhite from '../../images/mtmgrouplogo-white.svg'
import { GoThreeBars  } from 'react-icons/go';
import { ImCross  } from 'react-icons/im';

const Navbar = ( {navColor} ) => {
    const [sidebar, setSidebar] = useState(false);
    // const [color, setColor] = useState(false);

    // let location = useLocation();

    // useEffect (() => { 
    //     if(location.pathname === "/"){
    //         setColor(false);
    //     }
    //     else {
    //         setColor(true);
    //     }
    // }, [location]);

    // const changeColor = () => setColor(navColor);

    // let location = useLocation();

    // useEffect (() => { 
    //     changeColor();
    // }, [location]);

    const showSidebar = () => setSidebar(!sidebar);

    const onResizeSidebar = () =>{
        if(window.innerWidth > 700){
            setSidebar(false);
        }
    }

    window.addEventListener('resize', onResizeSidebar);

    return (
        <header>
            <div className={navColor ? "nav-wrapper nav-white" : "nav-wrapper"}>
                <div className={sidebar ? "overlay active" : "overlay"}></div>

                <Link className="nav-logo" to="/"><img className="logo-img" src={navColor ? LogoWhite : Logo} alt="mtm-logo"/></Link>
                
                <div className="nav-mob">
                    <Button buttonSize="btn-imgsize" onClick={showSidebar}><GoThreeBars className="nav-bars"/></Button>
                </div>
                
                <div className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <NavLinks onClick={showSidebar}/>
                    <Button buttonStyle="btn-close" buttonSize="btn-medium" onClick={showSidebar}><ImCross/></Button>
                </div>
            </div>
        </header>
    )
}

export default Navbar