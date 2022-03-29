import React, {useState} from 'react'
import facebook from "../img/facebook.svg"
import linkedin from "../img/linkedin.svg"
import insta from "../img/instagram.svg"
import twitter from "../img/twitter.svg"
import "../styles/header.styles.css"

const Header = () => {
    const [Class, setClass] = useState("")
    const [Menu, setMenu] = useState(false)
    const handlestyles = () =>{
        if (window.scrollY > 500) {
            setClass("fixed-header")
        } else {
            setClass("")
        }
    }
    const handleMenu =()=>{
        setMenu(!Menu)
    }
    window.addEventListener("scroll", handlestyles)
    return (
    <header id="main-header" className={Class}>
        <nav className="container flex just-between head align-center">
            <div className="flex col6 align-center menu">
                <button className="logo"><a href="#">S</a></button>
            
                <ul className={`just-between col10 flex just-center align-center res transition hide ${Menu? "show" : ""} `}id="main-menu">
                    <li><a href="#inicio">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Service">Service</a></li>
                    <li><a href="#Portfolio">Portfolio</a></li>
                    <li><a href="#Blog">Blog</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
            <ul className="just-between col2 flex just-center align-center mobile-non hide">
                <li><a href=""><img src={facebook} alt="Fb" /></a></li>
                <li><a href=""><img src={linkedin} alt="In" /></a></li>
                <li><a href=""><img src={insta} alt="Insta" /></a></li>
                <li><a href=""><img src={twitter} alt="TW" /></a></li>
            </ul>
            <div className="responsive-header col3" id="responsive-menu">
                <p onClick={handleMenu}>Menu</p>
            </div>
        </nav>
        
    </header>
    )
}

export default Header
