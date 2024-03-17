// Contact.js
import React, { Component } from 'react';
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
            <div className="contact-container">
                <h2>Contact Me</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" value={this.state.message} onChange={this.handleChange} required />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        );
    }
}

export default Contact;