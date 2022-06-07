import React from "react";
import './AboutMe.css'


const AboutMe = () => {
    return (
        <div className="about-me-container" id="about">
            <div className="about-me-title">
                <h1 className="about-me-title-text">About Me</h1>    
                <hr />
            </div>
            <div className="about-me-brand-statement">
                <p className="about-me-text">I am a Software Engineer with over a decade experience working in the Healthcare and SaaS industries. I am detail oriented with a demonstrated track record to meet project scope and deadlines. Proficient in a broad range of software design approaches and common UX patterns, I have the ability to communicate effectively with both technical and non-technical individuals to solve difficult software and UX problems.</p>
            </div>
        </div>
    )
}
export default AboutMe;