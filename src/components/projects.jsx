// Projects.js
import React, { Component } from 'react';
import '../css/projects.css'; // Import styles for the Projects component

class Projects extends Component {
    render() {
        return (
            <div className="projects-container">
                <h2>My Projects</h2>
                <div className="project-card">
                    <h3>Project 1</h3>
                    <p>Description of Project 1...</p>
                </div>
                <div className="project-card">
                    <h3>Project 2</h3>
                    <p>Description of Project 2...</p>
                </div>
                {/* Add more project cards as needed */}
            </div>
        );
    }
}

export default Projects;
