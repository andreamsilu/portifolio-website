import React, { useState } from 'react';
import { Button, Card, Form, Row, Col,Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import personalImage from '../components/images/developer-image.jpg';
function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      email: '',
      password: '',
      rememberMe: false
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-90">
      <Card className="login-card w-75 p-2" style={{marginTop:30, marginBottom:30}}>
        <Card.Body>
          <Row>
            <Col md={6} style={{backgroundColor:'dodgerblue'}}>
              <div className="description p-5 text-white mt-3 mx-5">
              <Image src={personalImage} style={{width:200}} className='p-2' roundedCircle />
                <h3>Welcome Back!</h3>
                <p>Please login to continue.</p>
              </div>
            </Col>
            <Col md={6}className='bg-success' >
              <Form onSubmit={handleSubmit} className='p-3'>
                <h2 className='text-center mb-4 text-white'>LOGIN</h2>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    <FontAwesomeIcon icon={faEnvelope} className="icon text-primary px-1" />
                    Email address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    required
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>
                    <FontAwesomeIcon icon={faLock} className="icon text-primary px-1" />
                    Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox" className="mb-3">
                  <Form.Check
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    label="Remember me"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="submit-button">
                  Login
                </Button>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
