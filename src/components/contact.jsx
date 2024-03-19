import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../css/contact.css'; // Import styles for the Contact component

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to backend or perform validation
        console.log('Form submitted:', this.state);
        // Clear form fields
        this.setState({ name: '', email: '', message: '' });
    }

    render() {
        return (
            <Container className="contact-container">
                <Row>
                    <Col md={6} className="contact-info">
                        <h2>Contact Information</h2>
                        <div className="info-item">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p>Email: contact@example.com</p>
                        </div>
                        <div className="info-item">
                            <FontAwesomeIcon icon={faPhone} />
                            <p>Phone: +255 75428 9824</p>
                        </div>
                        <div className="info-item">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <p>Address: 123 Street, City, Country</p>
                        </div>
                    </Col>
                    <Col md={6} className="contact-form">
                        <h2>Contact Me</h2>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="name">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="message">
                                <Form.Label>Message:</Form.Label>
                                <Form.Control as="textarea" rows={3} name="message" value={this.state.message} onChange={this.handleChange} required />
                            </Form.Group>
                            <Button variant="primary" type="submit">Send</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;
