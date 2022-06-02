import React from "react";
import './SocialIcons.css'

const SocialIcons = () => {
    return (
        <div className="social-icon-container">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/michaelstarkman/" target="_blank" rel="noreferrer">
                    <img className="social-icon" src="https://i.imgur.com/tUxbDbw.png" alt="LinkedIn"  />
                </a>
            </div>
            <div className="social-icon">
                <a href="https://github.com/MichaelStarkman" target="_blank" rel="noreferrer">
                    <img src="https://i.imgur.com/CH3X7YX.png" alt="GitHub" className="social-icon" />
                </a>
            </div>
            <div className="social-icon">
                <a href="mailto: michaelstarkman@gmail.com" target="_blank" rel="noreferrer">
                    <img src="https://i.imgur.com/2drZltB.png" alt="Gmail" className="social-icon" />
                </a>
            </div>
        </div>
    )
}
export default SocialIcons;
