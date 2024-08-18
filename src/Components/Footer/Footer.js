import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>Banasthali Vidyapith</li>
            
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About Group</li>
              <li>Help</li>
              <li>Contact Us</li>
              <li></li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>College Compass</p>
          </div>
          <div className="list">
            <ul>
              <li>Explore</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>India</p>
        <p>Free Classifieds in India. © 2024</p>
      </div>
    </div>
  );
}

export default Footer;