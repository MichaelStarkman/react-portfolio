import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import ResumeButton from "../ResumeButton/ResumeButton";
import Button from "react-bootstrap/Button";


import './HomeScreen.css'

const HomeScreen = () => {
    return (
        <section className="home-main-photo">
            <div className="home-container">
                <div className="home-text-container">
                    <h3>Hello, my name is</h3>
                    <h1 className="home-name-text">Michael</h1>
                    <h1 className="home-name-text">Starkman.</h1>
                    <h3>I am a</h3>
                </div>
                <div className="typewriter-container">
                    <br />
                    <TypeWriterEffect
                        className="typewriter"
                        loop={false}
                        startDelay={2000}
                        cursorColor="#3F3D56"
                        multiText={[
                            ' Web Designer.',
                            ' Full-Stack Developer.',
                            ' Boot Camp Grad.',
                            ' Software Engineer.',
                        ]}
                        multiTextDelay={1000}
                        multiTextLoop={true}
                        typeSpeed={50}
                    />
                </div>
                <br /><br /><br />
                <div className="home-button-container">
                    <ResumeButton></ResumeButton>
                    <Button
                        variant="outline-primary"
                        // size="lg"
                    > Let's Talk! </Button>
                </div>
            </div>
        </section>
    )
}
export default HomeScreen;