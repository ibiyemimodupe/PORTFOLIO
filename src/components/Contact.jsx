import React from "react";


export default function Contact() {
    return(
        <div className="contact--cont">
            <h1 id="C4">What's Next?</h1>
            <h2>Get In Touch</h2>
            <p>Have questions or want to work together?</p>
            <button className="button-text" onClick={() => window.location ='mailto:ibiyemideborah@gmail.com'}><h1 className="button--text">Contact Me</h1></button>
        </div>
    )
}
