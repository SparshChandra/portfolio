import React, { useState } from "react";
import "./index.scss";
import { Loader } from "react-loaders";
import {AnimatedLetters} from "../../assets/AnimatedLetters"

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    return (
        <>
            <div className="container projects-page">
                <h1 className="page.title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Projects".split("")}
                        idx={15} 
                    />
                </h1>
                {/* <div>{renderProjects()}</div> */}
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Projects;