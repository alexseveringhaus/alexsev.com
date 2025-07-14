import React from "react";
import '../assets/styles/Main.scss';
import headshot from '../assets/images/headshot.jpg';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={headshot} alt="Avatar" />
        </div>
        <div className="content">
          <h1>Alex Severinghaus</h1>
        </div>
      </div>
    </div>
  );
}

export default Main;
