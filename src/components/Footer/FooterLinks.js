import FooterLink from './FooterLink';

const FooterLinks = ( {onClick} ) => {
    return (
        <ul className="footer-list">
           <FooterLink onClick={onClick} to="/#">Услуги</FooterLink>
           <FooterLink onClick={onClick} to="/#">Партнеры</FooterLink>
           <FooterLink onClick={onClick} to="/#">О компании</FooterLink>
           <FooterLink onClick={onClick} to="/#">Контакты</FooterLink>
           <FooterLink onClick={onClick} to="/#">Частые вопросы</FooterLink>
        </ul>
    )
}

export default FooterLinks