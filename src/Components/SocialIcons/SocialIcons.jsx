import React from "react";
import './SocialIcons.css'

const SocialIcons = () => {
    return (
        <div className="social-icon-container">
            <div className="linkedin-icon">
            <a href="https://www.linkedin.com/in/michaelstarkman/" target="_blank" rel="noreferrer">
                    <img src="https://flyclipart.com/thumb2/linkedin-ui-flat-set-of-icons-icons-for-free-930862.png" alt="LinkedIn" width="50vw" height="50vw" />
                </a>
            </div>
            <div className="github-icon">
                <a href="https://github.com/MichaelStarkman" target="_blank" rel="noreferrer">
                    <img src="https://i.imgur.com/CILViGk.png" alt="GitHub" width="50vw" height="50vw" />
                </a>
            </div>
            <div className="gmail">
                <a href="mailto: michaelstarkman@gmail.com" target="_blank" rel="noreferrer">
                    <img src="https://image.similarpng.com/thumbnail/2020/12/Gmail-logo-design-on-transparent-background-PNG.png" alt="Gmail" width="50vw" height="50vw" />
                </a>
            </div>
        </div>
    )
}
export default SocialIcons;
