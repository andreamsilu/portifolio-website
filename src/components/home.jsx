import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import profileImage from './images/developer-image.jpg'; 
import '../css/animation.css'; // Import your custom CSS for animations
import personalImage from '../components/images/baba.jpg';
import About from './about';

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Col md={6}>
          <div className="animated fadeInDown"> {/* Apply animation class */}
            <img src={personalImage} alt="Profile"  className="img-fluid rounded-circle mb-4  w-100 h-100" />
          </div>
          <div className="animated fadeInUp"> {/* Apply animation class */}
            <h1 className="text-center mb-4">Welcome to My Portfolio</h1>
            <p className="text-center mb-4">I'm a software developer passionate about creating innovative solutions.</p>
            <div className="text-center">
              <Button variant="primary" href={About}>Learn More</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
