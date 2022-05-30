import React from "react";
import './Skills.css'

const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skills-title">
                <hr />
                <h1>Skills</h1>
                <hr />
            </div>
            <div className="skills-content">
                <p className="skills-group-title">Languages: </p><p>JavaScript, Python, HTML, CSS</p>
                <p className="skills-group-title">Libraries: </p><p>React, Node.js, Django, Express</p>
                <p className="skills-group-title">Databases: </p><p>Mongoose, MongoDB, PostgresSQL</p>
                <p className="skills-group-title">Other: </p><p>RESTful Routing, JSON APIs, Stack Overflow</p>
            </div>
            <br />
        </div>
    )
}
export default Skills;