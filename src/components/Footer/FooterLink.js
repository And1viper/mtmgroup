import { Link } from "react-router-dom";

const FooterLink = ( {children, to, onClick} ) => {
    return (
        <li className="footer-list-item">
            <Link className="footer-link" to={to} onClick={onClick}>{children}</Link>
        </li>
    )
}

export default FooterLink
