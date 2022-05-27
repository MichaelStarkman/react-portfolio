import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';
// import Button from 'react-bootstrap/Button';
import ResumeButton from "../ResumeButton/ResumeButton";
// import resume from '../../../src/michael-starkman-resume.pdf';
// import { Document, Page, pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js${pdfjs.version}/pdf.worker.js`

import './HomeScreen.css'

const HomeScreen = () => {
    return (
        <div>
            <h3>Hello, I am</h3>
            <h1>Michael Starkman</h1>
            {/* Insert Typist here */}
            <div className="typewriter-container">
                <h3>I am a   </h3>
                <br />
                <TypeWriterEffect
                    textStyle={{
                        fontFamily: 'Red Hat Display',
                        color: '#3F3D56',
                        fontWeight: 500,
                        fontSize: '1.5em',
                    }}
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
                    typeSpeed={30}
                />
            </div>
            <br />
           <ResumeButton></ResumeButton>
            <hr />    
        </div>
    )
}
export default HomeScreen;