import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2025 – Aug. 2025"
            iconStyle={{ background: '#000000', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBuilding} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Cisco Systems, Inc. - San Jose, CA</h4>
            <p>
              • Developed an internal AI assistant for a cloud security product enabling 120+ developers to efficiently troubleshoot issues from audit, system, and network traffic logs<br/>
              • Created a secure Model Context Protocol server in Go that exposes tools to an AWS Bedrock LLM client<br/>
              • Designed API endpoint to integrate tool within existing product, reducing average debugging time by 40%
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan. 2025 – Present"
            iconStyle={{ background: '#000000', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Course Producer</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Southern California - Los Angeles, CA</h4>
            <p>
              • Tutor and debug code for 250+ students in CSCI104 - Data Structures and Object Oriented Design<br/>
              • Teach core C++ topics such as runtime analysis, recursion, polymorphism, and data structure tradeoffs<br/>
              • Hold 8 hours of weekly lab assistance and office hours to reinforce course concepts through hands-on examples
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Aug. 2024 – Dec. 2024"
            iconStyle={{ background: '#000000', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faFlask} />}
          >
            <h3 className="vertical-timeline-element-title">Undergraduate Researcher</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Southern California - Los Angeles, CA</h4>
            <p>
              • Built Python-controlled robots using Raspberry Pi to provide study companions for 300 users with ADHD<br/>
              • Applied Gaussian Process reinforcement learning to iteratively personalize robot behavior to user preferences<br/>
              • Facilitated collaboration between 30+ student researchers for more robust software and hardware design
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2024 – Aug. 2024"
            iconStyle={{ background: '#000000', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineering Research Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">University of California, San Diego - San Diego, CA</h4>
            <p>
              • Implemented a Python-based simulation framework to evaluate the cost-efficiency of biogeochemical float deployments using a dataset of 200,000+ entries<br/>
              • Conducted statistical modeling to optimize sensor configurations, saving the program an estimated $300,000<br/>
              • Cleaned data set and leveraged data visualization modules to generate actionable insights for climate research
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;