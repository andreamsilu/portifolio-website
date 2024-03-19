import React, { Component } from 'react';
import '../css/home.css'; // Import your styling for Home page
import profileImage from './images/developer-image.jpg'; // Import your profile image

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="card">
                    <div className="card-bg">
                        <img src={profileImage} alt="Profile" />
                    </div>
                    <div className="card-content">
                        <h1>John Doe</h1>
                        <p className="role">Full Stack Developer</p>
                        <p className="tech-stack">Tech Stack: HTML, CSS, JavaScript, React</p>
                        <div className="social-links">
                            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                            <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                            <a href="mailto:johndoe@example.com"><i className="fas fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
