// Footer.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../css/footer.css'; // Import your styling for the footer

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Follow Me:</p>
                <div className="social-icons">
                    <a href="https://www.facebook.com/yourpage"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://twitter.com/yourpage"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://www.instagram.com/yourpage"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
                <p>&copy; 2024 Your Website. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
