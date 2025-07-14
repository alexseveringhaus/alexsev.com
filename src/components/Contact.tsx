import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact</h1>
          <div className="contact-content">
            <p>Feel free to reach out through any of these platforms:</p>
            <div className="contact-links">
              <a href="https://linkedin.com/in/alex-severinghaus" target="_blank" rel="noreferrer" className="contact-link">
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/alexseveringhaus" target="_blank" rel="noreferrer" className="contact-link">
                <GitHubIcon />
                <span>GitHub</span>
              </a>
              <a href="mailto:severing@usc.edu" className="contact-link">
                <MailIcon />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;