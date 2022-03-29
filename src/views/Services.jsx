import React from 'react'
import icono from "../img/iconos/009-smartphone.svg";
import icono2 from "../img/iconos/026-laptop.svg";
import icono3 from "../img/iconos/023-folder.svg";
import "../styles/services.styles.css"

const Services = () => {
    return (
        <section className="service" id="Service">
            <div className="container2 flex column">
                <div className="service-introduction">
                    <h4>What can i do for you</h4>
                    <h2>My Service</h2>
                    <p>This are some of the services i can offer. </p>
                </div>
                <div className="services flex just-between wrap">
                    <div className="serv">
                        <img src={icono} alt="services" />
                        <h3>HTML & CSS Responsive Design</h3>
                        <p>Responsive Design for Desktop or Mobile devices</p>
                    </div> 
                    <div className="serv">
                        <img src={icono2} alt="services" />
                        <h3>React JS Development</h3>
                        <p>One page aplications develop in React JS</p>
                    </div>  
                    <div className="serv">
                        <img src={icono3} alt="services" />
                        <h3>Freelance Service</h3>
                        <p>Work for projects</p>
                    </div>         
                </div>
            </div>
        </section>
    )
}

export default Services
