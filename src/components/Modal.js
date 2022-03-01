import Button from "./Button";
import ReactDOM from "react-dom";

// import { ImCross } from "react-icons/im";
import CrossImg from "../images/cross-img.svg";

const Modal = ( {open, children, onClose} ) => {
  if(!open) {
    document.body.classList.remove('active-overlay');
    return null;
  }
  
  if(open) {
    document.body.classList.add('active-overlay');
  }

  return ReactDOM.createPortal(
    <>
        <div onClick={onClose} className="overlay-modal"></div>
          <div className="modal">
          <div className="close-container">
            <Button buttonStyle="btn-close-modal" buttonSize="btn-medium" onClick={onClose}><img width="17px" src={CrossImg} alt="cross"/></Button>
          </div>
          {children}
        </div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
