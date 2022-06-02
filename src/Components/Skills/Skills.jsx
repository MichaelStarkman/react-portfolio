import React from "react";
import './Skills.css'

const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skills-title">
                <h1 className="skills-title">Skills</h1>
                <hr />
            </div>
            <div className="skills-content">
            <hr />
                <section>
                    <h4>Languages: </h4>
                    <p>...</p>
                    <div className="skills-icon-container">
                        <div>
                            <img className="icon-image" src="https://i.imgur.com/oKEBASu.png" alt="javascript" />
                            <p>JavaScript</p>
                        </div>
                        <div>
                            <img className="icon-image" src="https://i.imgur.com/E86xL0p.png" alt="python" />
                            <p>Python</p>
                        </div>
                        <div>
                            <img className="icon-image" src="https://i.imgur.com/ACD46Jd.png" alt="html" />
                            <p>HTML5</p>
                        </div>
                        <div className="icon-with-text">
                            <img className="icon-image" src="https://i.imgur.com/fVuo78h.png" alt="css-3" />
                            <p>CSS</p>
                        </div>

                    </div>
                </section>
                <hr />
                <section>
                    <h4>Libraries: </h4>
                    <p>...</p>
                    <div className="skills-icon-container">
                        <div>
                            <img className="icon-image" src="https://i.imgur.com/TwtF5Kz.png" alt="react" />
                            <p>React</p>
                        </div>
                        <div>
                            <img className="icon-image" src="https://i.imgur.com/CaIQ8An.png" alt="node-js" />
                            <p>Node.js</p>
                        </div>
                        <div>
                            <img className="icon-image" src="https://i.imgur.com/vKQoxuD.png" alt="Django" />
                            <p>Django</p>
                        </div>
                        <div className="icon-with-text">
                            <img className="icon-image" src="https://i.imgur.com/feBtnJW.png" alt="Express" />
                            <p>Express</p>
                        </div>

                    </div>
                </section>
                <hr />
                <section>
                    <h4>Databases: </h4>                
                    <p>...</p>
                    <div className="skills-icon-container">
                        <div>
                            <img className="icon-image" src="https://i.imgur.com/rdJefM2.png" alt="Mongoose" />
                            <p>Mongoose</p>
                        </div>
                        <div>
                            <img className="icon-image" src="https://i.imgur.com/M2A87Cd.png" alt="MongoDB" />
                            <p>MongoDB</p>
                        </div>
                        <div>
                            <img className="icon-image" src="https://i.imgur.com/a02OFbi.png" alt="PostgreSQL" />
                            <p>PostgreSQL</p>
                        </div>
                    </div>
                </section>
                {/* <p className="skills-group-title">Other: </p><p>RESTful Routing, JSON APIs, Stack Overflow</p> */}
            </div>
            <br />
        </div>
    )
}
export default Skills;