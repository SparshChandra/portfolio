import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
//import  Scrollbars   from 'react-custom-scrollbar';
const Education = () => {
  return (

 <div className="scroll">
    <VerticalTimeline >
  <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
     date="August 2023"
     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Scrum Alliance</h3>
    <h4 className="vertical-timeline-element-subtitle">Certified Scrum Master Certification</h4>
    <h5 className="vertical-timeline-element-subtitle">Denver, CO</h5>
    <p>
    Completed the scrum certification and passed the examination with 100% score
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
     date="August 2021 - May 2023"
     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
    
  >
    <h3 className="vertical-timeline-element-title">Stevens Institute of Technology</h3>
    <h4 className="vertical-timeline-element-subtitle">Master's of Science in Management Information Systems</h4>
    <h5 className="vertical-timeline-element-subtitle">Hoboken, NJ</h5>
    <p>
    I'm Sparsh Chandra, and I'm thrilled to share my recent achievement with you all. I've just graduated from the prestigious Stevens Institute of Technology with a Master's degree in Management Information Systems, specializing in Data and Business Analysis. 
    What I'm particularly proud of is my academic performance throughout this journey, as I earned an impressive GPA of 3.98.
    This achievement represents years of hard work, dedication, and a genuine passion for the field of Management Information Systems. 
    I'm excited about the future and the opportunities that lie ahead. With this strong educational foundation, I'm confident that I'll be able to make a meaningful impact in the world of data and business analysis. 
    Thank you for sharing in this momentous occasion with me, and I look forward to the exciting journey ahead
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
     date="September 2017 - June 2021"
     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
    
  >
    <h3 className="vertical-timeline-element-title">RKDF University</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor's of Engineering in Electrical Engineering</h4>
    <h5 className="vertical-timeline-element-subtitle">Bhopal, India</h5>
    <p>
    I completed my bachelor's in Electrical Engineering from RKDF University. During my undergraduate years, I specialized in Analytics, gaining valuable skills such as .NET programming and expertise in control systems. 
    This solid foundation in electrical engineering, combined with my master's degree, equips me with a unique blend of technical and analytical skills that I'm excited to apply in the world of data and business analysis.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
     date="April 2008 - April 2017"
     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
    
  >
    <h3 className="vertical-timeline-element-title">The Sanskaar Valley School</h3>
    <h4 className="vertical-timeline-element-subtitle">High School Student - Sciences</h4>
    <h5 className="vertical-timeline-element-subtitle">Bhopal, India</h5>
    <p>
    I completed my high schooling at The Sanskaar Valley School, an institution known for its excellence in education. It was during these crucial years that I not only gained a strong foundation in academics but also honed my leadership skills.

    During my time in high school, I specialized in Physics, Chemistry, and Mathematics, which laid the groundwork for my future academic pursuits. Additionally, I had the privilege of being appointed as the School's Vice Cultural Captain. In this role, I had the opportunity to lead and manage a diverse committee of students, overseeing various cultural activities and events.

    This experience taught me invaluable lessons in teamwork, communication, and organizational skills. It was a rewarding journey that allowed me to contribute to the vibrant school community while fostering my own personal growth.

    These early experiences in leadership and my dedication to academic excellence have been instrumental in shaping my path, leading me to achieve a Master's degree in Management Information Systems and specializing in Data and Business Analysis. I carry the lessons and values instilled in me during my high school years with gratitude and pride as I embark on the next phase of my journey.
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
</div>

  )
}
export default Education;
