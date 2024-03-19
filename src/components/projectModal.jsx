// ProjectModal.js
import React from 'react';
import '../css/projectModal.css';

const ProjectModal = ({ project, onClose }) => {
    return (
        <div className="modal-background" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{project.title}</h2>
                <p><strong>Stack Used:</strong> {project.stack}</p>
                <p><strong>Timeline:</strong> {project.timeline}</p>
                <p><strong>Participants:</strong> {project.participants}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default ProjectModal;
