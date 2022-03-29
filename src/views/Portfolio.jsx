import React from 'react'
import "../styles/portfolio.styles.css"

const Portfolio = () => {
    return (
        <section className="portfolio" id="Portfolio">
        <div className="container2 flex column align-center">
            <div className="portfolio-info">
                <h4>My complete project</h4>
                <h2>My Latest Projects</h2>
                <p>Deploy personal projects. I use several tools as hooks, API connection, libraries as react router, redux toolkit, bootstrap and tailwind. Also, I used the help of firebase, to use it as a complement working as a backend or storage.</p>
            </div>
            <div className="projects flex wrap just-between">
                <a className="p1 project flex column align-center just-end" href="https://weather-chi-eight.vercel.app/"><div >
                    <p>React JS</p>
                    <h3>Weather API</h3>
                </div></a>
                <a className="p2 project flex column align-center just-end" href="https://git-api-umber.vercel.app/"><div >
                    <p>React JS</p>
                    <h3>Github API</h3>
                </div></a>
                <a className="p3 project flex column align-center just-end" href="https://perfumes.vercel.app/"><div >
                    <p>React JS</p>
                    <h3>Shopping Cart</h3>
                </div></a>
            </div>
            <button className="project-button">View Projects</button>
        </div>
        </section>
    )
}

export default Portfolio
