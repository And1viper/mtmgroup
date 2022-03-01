import NavLink from './NavLink';

const NavLinks = ( {onClick} ) => {
    return (
        <ul className="nav-list">
           <NavLink onClick={onClick} to="/#contact-us">Связаться</NavLink>
           <NavLink onClick={onClick} to="/#services">Услуги</NavLink>
           <NavLink onClick={onClick} to="/gallery">Наши работы</NavLink>
           <NavLink onClick={onClick} to="/#contact-us">Контакты</NavLink>
        </ul>
    )
}

export default NavLinks