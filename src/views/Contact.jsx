import React from 'react'
import contact from '../img/contact.jpg';
import  "../styles/contact.styles.css"

export const Contact = () => {
    return (
        <section className="contact container2" id="Contact">
            <div className="contact-content flex col12 ">
                <div className="form flex column col6 mobile-100">
                    <p>Let's Say Hi</p>
                    <h3>Hire Me.</h3>
                    <p>Phone:    <span>+52 772 117 5072</span></p>
                    <p>Email:   <span>saul_skillet@hotmail.com</span></p>
                    <input type="text" id="name" placeholder="   Your Name *"/>
                    <input type="text" id="email" placeholder="  Your email *"/>
                    <input type="text" id="subject" placeholder="  Write a subject"/>
                    <input type="text" id="message" placeholder="  Your Message"/>
                    <button>SUBMIT NOW</button>
                </div>
                <div className="col6 mobile-100">
                <img className="col12" src={contact} alt="Contact"/> 
                </div>
            </div>  
        </section>
    )
}
