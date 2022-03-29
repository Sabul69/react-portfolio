import React from 'react'
import facebook from "../img/facebook.svg"
import linkedin from "../img/linkedin.svg"
import insta from "../img/instagram.svg"
import twitter from "../img/twitter.svg"
import "../styles/footer.styles.css"

export const Footer = () => {
    return (
        <footer>
        <nav className="footer container flex align-center just-between">
            <div className="col4">
                <button className="logo"><a href="#">S</a></button>
            </div>
            <div className="col3">
                <ul className="just-between flex just-center align-center ">
                    <li><a href=""><img src={facebook} alt="Fb"/></a></li>
                    <li><a href=""><img src={linkedin} alt="In"/></a></li>
                    <li><a href=""><img src={insta} alt="Insta"/></a></li>
                    <li><a href=""><img src={twitter} alt="TW"/></a></li>
                </ul>
            </div>
            <div className="col4">
                <h3>Copyright © 2021. All Rights Reserved.</h3>
            </div>
        </nav>
    </footer>
    )
}
