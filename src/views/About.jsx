import React, { useState } from 'react'
import SoftSkills from '../components/about/SoftSkills'
import Skills from '../components/about/Skills'
import Education from '../components/about/Education'
import Experience from '../components/about/Experience'
import about from '../img/about.jpg'
import "../styles/about.styles.css"

const About = () => {
    
    const [view, setView] = useState('Main')
    const handleView = (btn) =>{
        if (btn===1) {
           setView("Main") 
        }
        if (btn===2) {
            setView("SoftSkills") 
         }
         if (btn===3) {
            setView("Experience") 
         }
         if (btn===4) {
            setView("Education") 
         }
    }
    return (
    <section className="about" id="About">
     <div className="container flex just-between about-content">
         <div className="img-about col5">
             <img src={about} alt="About me"/>
         </div>
            <div className="info-about col7">
                <h4>My About Details</h4>
                <h2>About Me</h2>
                <p>My name is Saul I’m a front-end developer who loves coding, improve my skills and learn new technologies.
                Aside my professional skills, I love do exercise, play some instruments as the violin, the guitar and the piano, and I like to give me some time to read, sometimes learn something new, somethings to get into a fantastic story. 
                  </p>
                <div className="flex column">
                    <ul className="flex just-center">
                        <li className={`about-b ${view === 'Main' && 'active'}`} onClick={()=>handleView(1)}>Main Skills</li>
                        <li className={`about-b ${view === 'SoftSkills' && 'active'}`} onClick={()=>handleView(2)}>Soft Skills</li>
                        <li className={`about-b ${view === 'Experience' && 'active'}`} onClick={()=>handleView(3)}>Experience</li>
                        <li className={`about-b ${view === 'Education' && 'active'}`} onClick={()=>handleView(4)}>Education</li>
                    </ul>
                {view==='Main'?<Skills/> : view==='SoftSkills'? <SoftSkills/>: view==='Experience'? <Experience/> : <Education/> } 
                </div>
            </div>
     </div>
    </section>
    )
}

export default About
