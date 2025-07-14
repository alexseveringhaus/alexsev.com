import React, {useEffect} from "react";
import {
  Main,
  Timeline,
  About,
  Project,
  Contact,
  Navigation,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className="main-container">
        <Navigation/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <About/>
            <Timeline/>
            <Project/>
            <Contact/>
        </FadeIn>
    </div>
    );
}

export default App;