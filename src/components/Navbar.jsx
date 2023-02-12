import React from "react";
import img from "./images/logo.png"

export default function Navbar() {
    return(
        <nav>
            <div className="nav--logo">
               <img src={img} alt="logo" />
               
            </div>
            <div className="nav--text" >
                <ul class="nav--links">
                    <li><a href="#C1">About</a></li>
                    <li><a href="#C2">Experience</a></li>
                    <li><a href="#C3">Work</a></li>
                    <li><a href="#C4">Contact</a></li>
                    
                </ul>
                <a href="https://technology4dev-my.sharepoint.com/:b:/g/personal/oluwamodupe_ibiyemi_womentechsters_org/EV_E-7nmczlFuIV3fOBfS5QBjSTCzgcPoXL78zRgH6ZOkA?e=GmYdtW"><button className="resume-btn">Resume</button> </a>
            </div>
         </nav>
    )
}