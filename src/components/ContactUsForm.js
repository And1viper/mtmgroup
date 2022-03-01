import Button from './Button';
import { useState } from "react"
//import ContactDataServices from '../services/ContactDataServices';
import { useForm } from "react-hook-form";

const ContactUsForm = () => {
    const [status, setStatus] = useState("Submit");

    const[button, setButton] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        setStatus("Sending...");
        
        const details = {
            name: data.name,
            email: data.email,
            message: data.message,
            city: data.city,
            phone: data.phone,
        };
        
        alert("Сообщение отправлено!");

        setButton(false);

        // setButton(true);

        // ContactDataServices.sendForm(details)
        //     .then(response => {
        //         setStatus("Submit");
        //         response = status;
        //         alert("Сообщение отправлено!");
        //         setButton(false);
        //         reset();
        //     })
        //     .catch(e => {
        //         console.log(e);
        //         setButton(false);
        //     });
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} id="contact-form" className="contact-form">
            <div className="form-main">
                <p>Мы перезвоним в рабочее время с 9:00 до 18:00</p>
                <input {...register("name", {required: true, maxLength: 150}) } type="text" placeholder="ИМЯ"/>
                {errors.name?.type === 'required' && <h5 className="form-error">Это поле должно быть заполнено!</h5>}
                <input {...register("phone", {required: true, maxLength: 150}) } type="phone" placeholder="ТЕЛЕФОН"/>
                {errors.phone?.type === 'required' && <h5 className="form-error">Это поле должно быть заполнено!</h5>}
                <input {...register("email", {required: true, maxLength: 150}) } type="email" placeholder="ЭЛЕКТРОННАЯ ПОЧТА"/>
                {errors.email?.type === 'required' && <h5 className="form-error">Это поле должно быть заполнено!</h5>}
                <p className="contact-subtitle">КОММЕНТАРИЙ</p>
                <textarea {...register("message", {required: true, maxLength: 500}) }/>
                {/* {errors.message?.type === 'required' && <h5 className="form-error">Это поле должно быть заполнено!</h5>} */}
            </div>
            <div className="form-supplement">
                <p>Мы перезвоним в рабочее время с 9:00 до 18:00</p>
                <Button type="submit" disabled={button} buttonStyle="btn-accent" buttonSize="btn-large">{button ? 'Отправляем' : 'Отправить заявку'}</Button>
            </div>
        </form>
    )
}

export default ContactUsForm