import React from "react";
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
              <h3>University of Southern California, Viterbi School of Engineering</h3>
              <p className="degree">Bachelor of Science, Computer Engineering & Computer Science</p>
              <p className="dates">Aug. 2023 – May 2027</p>
              <div className="education-details">
                <p><strong>GPA:</strong> 3.96/4.0</p>
                <p><strong>Coursework:</strong> Data Structures and Object-Oriented Design, Algorithms & Theory of Computing, Distributed Systems & IoT, Operating Systems, Software Development, Embedded Systems, Digital Circuits, Probability Theory, Linear Algebra, Calculus III</p>
              </div>
            </div>
          </div>
          
          <div className="skills-section">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Languages</h3>
                <p>Python, C/C++, Golang, Java, JavaScript, HTML, CSS, SQL, Unix Shell/Linux, Verilog</p>
              </div>
              <div className="skill-category">
                <h3>Technologies</h3>
                <p>Git, AWS, Docker, Virtual Machines, VSCode, MySQL, Eclipse, Cursor, Model Context Protocol, IntelliJ, Raspberry Pi, Arduino</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 