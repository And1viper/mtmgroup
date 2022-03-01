import Logo from "../images/mtmgrouplogo.svg"

const PhantomNavbar = () => {
  return(
    <div className="phantom-navbar">
        <a className="nav-logo phantom-navbar" href="/"><img className="logo-img" src={Logo} alt="mtm-logo"/></a>
    </div>
  );
};

export default PhantomNavbar;
