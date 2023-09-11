
import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  return (

 <div className="scroll">
    <VerticalTimeline >
  <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
     date="January 2023 - May 2023"
     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Evergreen Investments</h3>
    <h4 className="vertical-timeline-element-subtitle">Data Analyst - Python and Deluge Developer</h4>
    <h5 className="vertical-timeline-element-subtitle">Duluth, GA</h5>
    <p>
    • Worked on a project to analyze and visualize Leads outcomes for Brokerage by removing null and void records using Zoho
      Dataprep which enhanced customer relations by 20%
    • Executed and integrated Data Cleaning and structuring using custom SQL queries in Zoho Analytics on companys data
    • Visualized CRM to extract property data, using Python and Deluge Scripting to automate new leads into property database
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
     date="October 2022 - December 2022"
     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
    
  >
    <h3 className="vertical-timeline-element-title">Stevens Institute of Technology</h3>
    <h4 className="vertical-timeline-element-subtitle">Teaching Assistant - Strategic Perspective of Project Management</h4>
    <h5 className="vertical-timeline-element-subtitle">Hoboken, NJ</h5>
    <p>
      Mentoring, Project Management, Scrum, Smartsheets, Gant Charts
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
     date="September 2022 - December 2022"
     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
    
  >
    <h3 className="vertical-timeline-element-title">Stevens Institute of Technology</h3>
    <h4 className="vertical-timeline-element-subtitle">Teaching Assistant - Data Analytics Practicum</h4>
    <h5 className="vertical-timeline-element-subtitle">Hoboken, NJ</h5>
    <p>
      Mentoring, Data Analytics, Data Extraction, Interactive Dashboards, SEO Project Support
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
     date="August 2022 - May 2023"
     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
    
  >
    <h3 className="vertical-timeline-element-title">Business Intelligence and Analytics Club - Stevens Institute of Technology</h3>
    <h4 className="vertical-timeline-element-subtitle">Tableau Mentor</h4>
    <h5 className="vertical-timeline-element-subtitle">Hoboken, NJ</h5>
    <p>
      Mentoring, Data Visualization, Data Cleaning, Tableau Dashboards, MS Excel - Pivot Table, VBA, Macros, MS Access, SQL
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
     date="June 2022 - August 2022"
     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
    
  >
    <h3 className="vertical-timeline-element-title">Avis Budget Group</h3>
    <h4 className="vertical-timeline-element-subtitle">Data Scientist and Analyst</h4>
    <h5 className="vertical-timeline-element-subtitle">Parsippany, NJ</h5>
    <p>
    • Researched and analyzed Budget's NPS scores and developed a system to increase them from 27% to 45% by 2025
    • Decoded fleets dataset by eliminating duplicates based on VIN number and Sales Description using various functions such as
    countif, sort filter, VLOOKUP
    • Developed and improvised a SQL query to extract Fleet's data for each state of current year, including number of VINs, and
    joined it with revenue data of year 2021 from their server using full outer and inner join to generate a tableau dashboard using
    custom SQL
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
     date="January 2019 - June 2021"
     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
    
  >
    <h3 className="vertical-timeline-element-title">Xtranet Technologies</h3>
    <h4 className="vertical-timeline-element-subtitle">Web & Data Analyst</h4>
    <h5 className="vertical-timeline-element-subtitle">Bhopal, MP</h5>
    <p>
    • Collaborated with ERP team in developing and researching website development project, kept a detailed analytical record on
    excel & SQL and visualized data using charts made in Tableau
    • Gathered and analyzed customer technical requirements and developed more than 15 robust websites using web technologies
    such as JavaScript, HTML, CSS and Python in an agile setting
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
</div>

  )
}
export default Experience;

