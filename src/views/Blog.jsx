import React from 'react'
import "../styles/blog.styles.css"

const Blog = () => {
    return (
        <section className="blog" id="Blog">
            <div className="container2 flex column"> 
                <div className="blog-info">

                </div>
                <div className="item">
                    <h4>Latest news </h4>
                    <h2>Latest News</h2>
                    <p>Section in progress...</p>
                </div>
                <div className="news flex just-between">
                    <div className="new flex column just-end">
                        <p>App Development</p>
                        <h3>What is the difference between web and brand.</h3>
                    </div>
                    <div className="new flex column just-end">
                        <p>App Development</p>
                        <h3>What is the difference between web and brand.</h3>
                    </div>
                    <div className="new flex column just-end">
                        <p>App Development</p>
                        <h3>What is the difference between web and brand.</h3>
                    </div>
                </div>
            </div>   
        </section>
    )
}

export default Blog
