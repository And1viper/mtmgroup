const STYLES = [
    "btn-img",
    "btn-accent",
    "btn-white",
    "btn-black",
    "btn-close-modal",
    "btn-close",
];

const SIZES = [
    "btn-small",
    "btn-medium",
    "btn-large",
    "btn-imgsize",
];

const Button = ( {children, onClick, type, buttonStyle, buttonSize, disabled} ) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize: SIZES[0];

    return (
        <button disabled={disabled} className={`btn ${checkButtonStyle} ${checkButtonSize}`} type={type} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
