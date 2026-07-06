import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCode, faGears } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/About.scss';

function About() {
  return (
    <div id="about">
      <div className="items-container">
        <h1>About Me</h1>
        <div className="about-content">
          <div className="education-section">
            <h2>Education</h2>
            <div className="education-item">
              <div className="education-header">
                <h3><FontAwesomeIcon icon={faGraduationCap} className="education-icon" />University of Southern California, Viterbi School of Engineering</h3>
                <p className="dates">Aug. 2023 – May 2027</p>
              </div>
              <p className="degree">Bachelor of Science, Computer Engineering & Computer Science</p>
              <div className="education-details">
                <p><strong>GPA:</strong> 3.97/4.0</p>
                <p className="coursework-label"><strong>Coursework:</strong></p>
                <ul className="skill-list">
                  <li>Operating Systems</li>
                  <li>Internetworking</li>
                  <li>Distributed Systems & IoT</li>
                  <li>Data Structures and Object-Oriented Design</li>
                  <li>Algorithms & Theory of Computing</li>
                  <li>Software Development</li>
                  <li>Embedded Systems</li>
                  <li>Digital Circuits</li>
                  <li>Probability Theory</li>
                  <li>Linear Algebra</li>
                  <li>Calculus III</li>
                </ul>
              </div>
            </div>
            <div className="education-item">
              <div className="education-header">
                <h3><FontAwesomeIcon icon={faGraduationCap} className="education-icon" />University of Edinburgh</h3>
                <p className="dates">Jan. 2026 – May 2026</p>
              </div>
              <p className="degree">Study Abroad Semester</p>
              <div className="education-details">
                <p className="coursework-label"><strong>Coursework:</strong></p>
                <ul className="skill-list">
                  <li>Advanced Topics in Machine Learning</li>
                  <li>Robot & Reinforcement Learning</li>
                  <li>Security Engineering</li>
                  <li>Automatic Speech Recognition</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3><FontAwesomeIcon icon={faCode} className="skill-icon" />Languages</h3>
                <ul className="skill-list">
                  <li>Python</li>
                  <li>C/C++</li>
                  <li>Go</li>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SQL</li>
                  <li>Unix Shell</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3><FontAwesomeIcon icon={faGears} className="skill-icon" />Technologies</h3>
                <ul className="skill-list">
                  <li>Claude Code</li>
                  <li>Git</li>
                  <li>Docker</li>
                  <li>Virtual Machines</li>
                  <li>AWS</li>
                  <li>MySQL</li>
                  <li>Cursor</li>
                  <li>MCP</li>
                  <li>Fast-API</li>
                  <li>ML</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 