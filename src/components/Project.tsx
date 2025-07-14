import React from "react";
import '../assets/styles/Project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://github.com/uscmakers/BullsAI" target="_blank" rel="noreferrer">
                        <div className="project-box">
                            <div className="project-icon">
                                <FontAwesomeIcon icon={faEye} size="2x" />
                            </div>
                            <div className="project-details">
                                <h2>Bulls-AI</h2>
                                <p>Computer vision model using OpenCV to score mobile darts game with ~95% accuracy. Features IR camera detection system and image filtering optimization.</p>
                                <p className="tech-stack"><strong>Tech:</strong> Python, OpenCV</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="project">
                    <a href="https://github.com/alexseveringhaus/Noise-Monitoring-IoT" target="_blank" rel="noreferrer">
                        <div className="project-box">
                            <div className="project-icon">
                                <FontAwesomeIcon icon={faVolumeUp} size="2x" />
                            </div>
                            <div className="project-details">
                                <h2>Noise Monitoring System</h2>
                                <p>IoT system to monitor noise on Raspberry Pi and transmit data via MQTT for remote processing. Features real-time signal analysis and LED response system.</p>
                                <p className="tech-stack"><strong>Tech:</strong> Python, IoT, MQTT</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="project">
                    <a href="https://github.com/alexseveringhaus/Rideshare-Web-App" target="_blank" rel="noreferrer">
                        <div className="project-box">
                            <div className="project-icon">
                                <FontAwesomeIcon icon={faCar} size="2x" />
                            </div>
                            <div className="project-details">
                                <h2>Rideshare App</h2>
                                <p>Full-stack web application to promote rideshare for 30,000+ students. Integrates React frontend with Google Maps API, Java servlets, and MySQL database.</p>
                                <p className="tech-stack"><strong>Tech:</strong> Java, React, MySQL</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="project">
                    <a href="https://github.com/alexseveringhaus/Market-Neural-Network" target="_blank" rel="noreferrer">
                        <div className="project-box">
                            <div className="project-icon">
                                <FontAwesomeIcon icon={faChartLine} size="2x" />
                            </div>
                            <div className="project-details">
                                <h2>Market Neural Network</h2>
                                <p>Neural network model to predict stock market trends using Yahoo Finance API. Implements LSTM layers, feature engineering with lag variables, and backtesting strategy visualization.</p>
                                <p className="tech-stack"><strong>Tech:</strong> Python, Keras, TensorFlow</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="project">
                    <div className="project-box">
                        <div className="project-icon">
                            <FontAwesomeIcon icon={faRobot} size="2x" />
                        </div>
                        <div className="project-details">
                            <h2>Cisco x Anthropic MCP Hackathon</h2>
                            <p>Python-developed MCP Server with an LLM to automate failure context, improve analysis, and streamline Cisco internal bug filing.</p>
                            <p className="tech-stack"><strong>Tech:</strong> Python, MCP, LLMs</p>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <a href="https://github.com/alexseveringhaus/alexsev.com" target="_blank" rel="noreferrer">
                        <div className="project-box">
                            <div className="project-icon">
                                <FontAwesomeIcon icon={faGlobe} size="2x" />
                            </div>
                            <div className="project-details">
                                <h2>Personal Website</h2>
                                <p>Personal portfolio website built with React and TypeScript. Features smooth animations, thoughtful UI/UX design, and showcases relevant experience and projects.</p>
                                <p className="tech-stack"><strong>Tech:</strong> React, TypeScript</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;
