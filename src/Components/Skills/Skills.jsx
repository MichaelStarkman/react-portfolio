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
                    <h4 className="skills-group-title">Languages: </h4>
                    <p className="dots">...</p>
                    <div className="skills-icon-container">
                        <div>
                            <img className="icon-image" src="https://i.imgur.com/oKEBASu.png" alt="javascript" />
                            <p className="skill">JavaScript</p>
                        </div>
                        <div>
                            <img className="icon-image" src="https://i.imgur.com/E86xL0p.png" alt="python" />
                            <p className="skill">Python</p>
                        </div>
                        <div>
                            <img className="icon-image" src="https://i.imgur.com/ACD46Jd.png" alt="html" />
                            <p className="skill">HTML5</p>
                        </div>
                        <div className="icon-with-text">
                            <img className="icon-image" src="https://i.imgur.com/fVuo78h.png" alt="css-3" />
                            <p className="skill">CSS</p>
                        </div>

                    </div>
                </section>
                <hr />
                <section>
                    <h4 className="skills-group-title">Libraries: </h4>
                    <p className="dots">...</p>
                    <div className="skills-icon-container">
                        <div>
                            <img className="icon-image" src="https://i.imgur.com/TwtF5Kz.png" alt="react" />
                            <p className="skill">React</p>
                        </div>
                        <div>
                            <img className="icon-image" src="https://i.imgur.com/CaIQ8An.png" alt="node-js" />
                            <p className="skill">Node.js</p>
                        </div>
                        <div>
                            <img className="icon-image" src="https://i.imgur.com/vKQoxuD.png" alt="Django" />
                            <p className="skill">Django</p>
                        </div>
                        <div className="icon-with-text">
                            <img className="icon-image" src="https://i.imgur.com/feBtnJW.png" alt="Express" />
                            <p className="skill">Express</p>
                        </div>

                    </div>
                </section>
                <hr />
                <section>
                    <h4 className="skills-group-title">Databases: </h4>                
                    <p className="dots">...</p>
                    <div className="skills-icon-container">
                        <div>
                            <img className="icon-image" src="https://i.imgur.com/rdJefM2.png" alt="Mongoose" />
                            <p className="skill">Mongoose</p>
                        </div>
                        <div>
                            <img className="icon-image" src="https://i.imgur.com/M2A87Cd.png" alt="MongoDB" />
                            <p className="skill">MongoDB</p>
                        </div>
                        <div>
                            <img className="icon-image" src="https://i.imgur.com/a02OFbi.png" alt="PostgreSQL" />
                            <p className="skill">PostgreSQL</p>
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