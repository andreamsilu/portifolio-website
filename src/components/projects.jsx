// Projects.js
import React, { Component } from 'react';
import '../css/projects.css'; // Import styles for the Projects component
import projectImage1 from '../components/images/developer-image.jpg';

class Projects extends Component {
    render() {
        return (
            <div className="projects-container">
                <h2>Projects</h2>
                <div className="project-row">
                    <div className="project-card">
                         <div className="project-title">
                                <h3>Project 1</h3>
                            </div>
                        <div className="card-content">
                            <img src={projectImage1} alt="Project 1" />
                            <div className="overlay">
                                <h3>Project 1</h3>
                                <button className="view-project">View Project</button>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                         <div className="project-title">
                                <h3>Project 1</h3>
                            </div>
                        <div className="card-content">
                            <img src={projectImage1} alt="Project 1" />
                            <div className="overlay">
                                <h3>Project 1</h3>
                                <button className="view-project">View Project</button>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                         <div className="project-title">
                                <h3>Project 1</h3>
                            </div>
                        <div className="card-content">
                            <img src={projectImage1} alt="Project 1" />
                            <div className="overlay">
                                <h3>Project 1</h3>
                                <button className="view-project">View Project</button>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                         <div className="project-title">
                                <h3>Project 1</h3>
                            </div>
                        <div className="card-content">
                            <img src={projectImage1} alt="Project 1" />
                            <div className="overlay">
                                <h3>Project 1</h3>
                                <button className="view-project">View Project</button>
                            </div>
                        </div>
                    </div>


                    <div className="project-card">
                         <div className="project-title">
                                <h3>Project 1</h3>
                            </div>
                        <div className="card-content">
                            <img src={projectImage1} alt="Project 1" />
                            <div className="overlay">
                                <h3>Project 1</h3>
                                <button className="view-project">View Project</button>
                            </div>
                        </div>
                    </div>


                    <div className="project-card">
                         <div className="project-title">
                                <h3>Project 1</h3>
                            </div>
                        <div className="card-content">
                            <img src={projectImage1} alt="Project 1" />
                            <div className="overlay">
                                <h3>Project 1</h3>
                                <button className="view-project">View Project</button>
                            </div>
                        </div>
                    </div>


                    {/* Add more project cards */}
                </div>
            </div>
        );
    }
}

export default Projects;
