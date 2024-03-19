// About.js
import React, { Component } from 'react';
import '../css/about.css'; // Import your styling for the About page
import personalImage from '../components/images/developer-image.jpg';
class About extends Component {
    render() {
        return (
            <div className="about-container">
                <section className="about-section">
                    <h2 className="section-title">About Myself</h2>
                    <div className="about-content">
                        <div className="image-container">
                        <img src={personalImage} alt="personal pic" />
                        </div>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan urna at felis egestas...</p>
                        </div>
                    </div>
                </section>


                <section className="education-section">
                    <h2 className='section-title'>Education</h2>
                    <div className="education-row">
                        <div className="education-card">
                            <div className="card-background" style={{ backgroundImage: `url(${personalImage})` }}>
                                <div className="card-content">
                                    <h3>Primary Education</h3>
                                    <p>School Name: Kiponzelo Primary School</p>
                                    <p>Location:Iringa, Tz</p>
                                </div>
                            </div>
                        </div>
                        <div className="education-card">
                            <div className="card-background" style={{ backgroundImage: `url(${personalImage})` }}>
                                <div className="card-content">
                                    <h3>O'Level Education</h3>
                                    <p>School Name: Kibaha Sec School</p>
                                    <p>Location:Pwani, Tz</p>
                                </div>
                            </div>
                        </div>
                        <div className="education-card">
                            <div className="card-background" style={{ backgroundImage: `url(${personalImage})` }}>
                                <div className="card-content">
                                    <h3>A'level Education</h3>
                                    <p>School Name: Kibiti High School</p>
                                    <p>Combination:PCM</p>
                                    <p>Location:Pwani, Tz</p>
                                </div>
                            </div>
                        </div>
                        <div className="education-card">
                            <div className="card-background" style={{ backgroundImage: `url(${personalImage})` }}>
                                <div className="card-content">
                                    <h3>University Education</h3>
                                    <p>University: UDSM</p>
                                    <p>Degree:Computer Science.</p>
                                    <p>Location: DSM, Tz</p>
                                </div>
                            </div>
                        </div>
                        {/* Repeat the card structure for other education levels */}
                    </div>
                </section>

                <section className="skills-section">
                    <h2 className='section-title'> Skills</h2>
                    <p className='intro-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan urna at felis egestas...</p>
                    <div className="skills-row">
                        <div className="skill-card">
                            <img src={personalImage} alt="Skill 1" />
                            <div className="skill-details">
                                <h3>Reactjs</h3>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '100%' }}></div>
                                </div>
                                <span>100%</span>
                            </div>
                        </div>

                        <div className="skill-card">
                            <img src={personalImage} alt="Skill 1" />
                            <div className="skill-details">
                                <h3>Flutter</h3>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '90%' }}></div>
                                </div>
                                <span>90%</span>
                            </div>
                        </div>

                        <div className="skill-card">
                            <img src={personalImage} alt="Skill 1" />
                            <div className="skill-details">
                                <h3>Nodejs</h3>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '80%' }}></div>
                                </div>
                                <span>80%</span>
                            </div>
                        </div>

                        <div className="skill-card">
                            <img src={personalImage} alt="Skill 1" />
                            <div className="skill-details">
                                <h3>Laravel</h3>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '99%' }}></div>
                                </div>
                                <span>99    %</span>
                            </div>
                        </div>
                        {/* Repeat the card structure for other skills */}
                    </div>
                </section>
                <section className="exp-section">
                    <h2 className='section-title'>Experience</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan urna at felis egestas...</p>
                </section>
            </div>
        );
    }
}

export default About;
