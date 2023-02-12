import React from "react";
import img from "./images/portfolio.png";

function About() {
  return (
    <div className="about--cont">
      <h1 id="C1" className="about--text">About Me</h1>
      <div className="about--pic">
        <div className="aboutme">
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and i'm always looking for new things
            to learn. <br /> Here are a few technologies I’ve been working with
            recently:
          </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
          </ul>
        </div>
        <div className="my-img-cont">
          <img src={img} alt="myself" className="my-img" />
        </div>
      </div>
    </div>
  );
}

export default About
