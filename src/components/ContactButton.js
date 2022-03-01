import { useState } from "react";
import ContactUsForm from "./ContactUsForm";

import Modal from "./Modal";
import Button from "./Button";

const ContactButton = ( {color} ) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button buttonStyle={color} buttonSize="btn-large" onClick={() => setIsOpen(true)}>Оставить заявку</Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <h1 className="contact-title">ЗАЯВКА НА ЗВОНОК</h1>
        <ContactUsForm/>
      </Modal>
    </>
  );
};

export default ContactButton;
