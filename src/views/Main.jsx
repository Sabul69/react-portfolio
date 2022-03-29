import React from 'react'
import resume from '../documents/Resume 2022.pdf'
import "../styles/main.styles.css"
const Main = () => {
    return (
 <section className="main flex" id="inicio">
     <div className="main-title container">
         <h1>Front End Developer</h1>
        <h2>Hello,I'm Saúl Welcome  to my world </h2>
        <a download="Resume" href={resume}><button className="cv">DOWNLOAD MY CV</button></a>
        </div>
 </section>   

    )
}

export default Main
