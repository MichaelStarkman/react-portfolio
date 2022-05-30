import React from "react";
import Button from "react-bootstrap/Button";
import pdf from '../../michael-starkman-resume.pdf'

const ResumeButton = () => {
    return (
        <div>
            <Button href={pdf} target="_blank" rel="noreferrer">
                    Download CV
            </Button>
        </div>
    )
}
export default ResumeButton;