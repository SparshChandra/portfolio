import React, { useState, useEffect } from "react";
import "./index.scss";
import { Loader } from "react-loaders";
import {AnimatedLetters} from "../../assets/AnimatedLetters"
import projectsData from '../../data/projects.json';

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    console.log(projectsData);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => {
            clearTimeout(timer);
        }
    });

    const renderProjects = (projects) => {
        return (
            <div className="images-container">
                {
                    projects.map((proj, idx) =>{
                        return(
                            <div className="image-box" key={idx}>
                                <img 
                                src={proj.cover}
                                className="projects-image"
                                alt="projects" />
                                <div className="content">
                                    <p className="title">{proj.title}</p>
                                    <h4 className="description">{proj.description}</h4>
                                    <button 
                                    className="btn"
                                    onClick={() => window.open(proj.url)}
                                    >view </button>
                                </div>    

                            </div>    
                        )
                    })
                }
            </div>

        );
    }


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
                <div>{renderProjects(projectsData.projects)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Projects;