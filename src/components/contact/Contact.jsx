import React, { useRef } from "react";
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {FaTelegramPlane} from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_96a4z5n', 'template_8ctdlxf', form.current, 'UlTdtoEX_-tCtgOEP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };
    return  (
        <section id='contact'>
            <h5>Get in touch</h5>
            <h2>Contact me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>diamalyutina@gmail.com</h5>
                        <a href="mailto:diamalyutina@gmail.com" target='_blank'>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <FaTelegramPlane className='contact__option-icon'/>
                        <h4>Telegram</h4>
                        <h5>Dianosaurum</h5>
                        <a href="https://t.me/Dianosaurum" target='_blank'>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>Diana</h5>
                        <a href="https://api.whatsapp.com/send?phone=79692843031" target='_blank'>Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name="message" placeholder='Your message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;