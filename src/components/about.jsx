import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import personalImage from '../components/images/developer-image.jpg';
import '../css/about.css';

const About = () => {
    return (
        <Container className="about-container">
            <section className="about-section">
                <h2 className="section-title">About Myself</h2>
                <Row>
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Img variant="top" src={personalImage} alt="personal pic" />
                            <Card.Body>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan urna at felis egestas...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan urna at felis egestas...</p>
                        </div>
                    </Col>
                </Row>
            </section>

            <section className="education-section">
                <h2 className='section-title'>Education</h2>
                <Row>
                    <Col xs={12} sm={6} md={3}>
                        <Card className="education-card">
                            <Card.Img variant="top" src={personalImage} />
                            <Card.Body>
                                <Card.Title>Primary Education</Card.Title>
                                <Card.Text>
                                    School: Kiponzelo Primary <br />
                                    Location: Iringa, Tz <br />
                                    Year: 2007 - 2013
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <Card className="education-card">
                            <Card.Img variant="top" src={personalImage} />
                            <Card.Body>
                                <Card.Title>Ordinary Education</Card.Title>
                                <Card.Text>
                                    School: Kibaha Sec School <br />
                                    Subjects Category: Science <br/>
                                    Year: 2014 - 2017
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <Card className="education-card">
                            <Card.Img variant="top" src={personalImage} />
                            <Card.Body>
                                <Card.Title>Advanced Education</Card.Title>
                                <Card.Text>
                                    School : Kibiti High School <br />
                                    Combination: PCM <br/>
                                    Location: Coast Region, Tz
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <Card className="education-card">
                            <Card.Img variant="top" src={personalImage} />
                            <Card.Body>
                                <Card.Title>University Education</Card.Title>
                                <Card.Text>
                                    University: UDSM(CoICT) <br />
                                    Bachelor: Computer Science<br/>
                                    Year:2020-2023
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* Add more education cards here */}
                </Row>
            </section>

            <section className="skills-section">
                <h2 className='section-title'>Skills</h2>
                <p className='intro-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan urna at felis egestas...</p>
                <Row>
                    <Col xs={12} sm={6} md={3}>
                        <Card className="skill-card">
                            <Card.Img variant="top" src={personalImage} />
                            <Card.Body>
                                <Card.Title>Reactjs</Card.Title>
                                <ProgressBar now={70} label="70%" />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <Card className="skill-card">
                            <Card.Img variant="top" src={personalImage} />
                            <Card.Body>
                                <Card.Title>Flutter</Card.Title>
                                <ProgressBar now={90} label="90%" />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <Card className="skill-card">
                            <Card.Img variant="top" src={personalImage} />
                            <Card.Body>
                                <Card.Title>PHP/Laravel</Card.Title>
                                <ProgressBar now={85} label="85%" />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <Card className="skill-card">
                            <Card.Img variant="top" src={personalImage} />
                            <Card.Body>
                                <Card.Title>Nodejs/Expressjs</Card.Title>
                                <ProgressBar now={90} label="90%" />
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* Add more skill cards here */}
                </Row>
            </section>

            <section className="exp-section">
                <h2 className='section-title'>Experience</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan urna at felis egestas...</p>
            </section>
        </Container>
    );
}

export default About;
