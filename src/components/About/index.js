import { useEffect, useState } from 'react';
import {
  faPython,
  faMicrosoft,
  faSquareYoutube,
  faAws,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders'; // Import the Loader component
import { AnimatedLetters } from '../../assets/AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

export const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className ='paddingparagraph'>
          <p >
          Greetings! Folks, my journey in the world of data and analytics began with a thirst for knowledge and a dedication to academic excellence. 
          I embarked on this journey by pursuing a Master's in Management Information Systems at the esteemed Stevens Institute of Technology. 
          During my time there, I consistently achieved outstanding results, graduating with an impressive GPA of 3.98. 
          This educational experience has laid a solid foundation for my career and instilled in me a deep understanding of information systems and their strategic applications in the business world.
          
          </p>
          </div>
          <div className ='paddingparagraph'>
          <p align="LEFT">
          Complementing my academic achievements, I proudly hold the distinction of being a Certified ScrumMaster. 
          This certification is a testament to my commitment to effective project management and collaborative teamwork. 
          It signifies my ability to facilitate and optimize Agile practices, an invaluable skillset in today's dynamic business landscape.

          </p>
          </div>
          <div className ='paddingparagraph'>
          <p>

          Building upon my educational background and certification, I've cultivated over three years of hands-on experience in the field of analytics. 
          This journey has provided me with a diverse set of skills and competencies that include proficiency in Python, SQL, Tableau, Excel, and Zoho Analytics.
          My passion lies in the transformative power of data. I've had the privilege of harnessing this power to extract actionable insights from complex datasets, driving informed decision-making and business growth. 
          My analytical acumen and expertise have allowed me to tackle a wide range of challenges, making a meaningful impact in various professional settings.
          </p>
          </div>

          <div className ='paddingparagraph'>
          <p>

          Beyond my professional pursuits, I'm also deeply passionate about Powerlifting and vlogging, which adds a unique dimension to my problem-solving abilities and keeps me balanced and inspired.

          </p>
          </div>

          {/* </p> */}
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAws} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faMicrosoft} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faSquareYoutube} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
      
    </>
  );
};

