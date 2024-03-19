import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import '../css/projects.css'; // Import styles for the Projects component
import projectImage1 from '../components/images/developer-image.jpg';

class Projects extends Component {
    render() {
        return (
            <div className="projects-container">
                <h2>Projects</h2>
                <Row>
                    <Col md={4}>
                        <Card className="project-card">
                            <Card.Body>
                                <div className="project-title">
                                    <Card.Title>Project 1</Card.Title>
                                </div>
                                <Card.Img variant="top" src={projectImage1} alt="Project 1" />
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">View Project</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="project-card">
                            <Card.Body>
                                <div className="project-title">
                                    <Card.Title>Project 2</Card.Title>
                                </div>
                                <Card.Img variant="top" src={projectImage1} alt="Project 2" />
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">View Project</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="project-card">
                            <Card.Body>
                                <div className="project-title">
                                    <Card.Title>Project 3</Card.Title>
                                </div>
                                <Card.Img variant="top" src={projectImage1} alt="Project 3" />
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">View Project</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Projects;
