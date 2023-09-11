

import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { Link } from 'react-router-dom'; // Assuming you're using react-router for the Link component
import LogoTitle from '../../assets/images/logo-s.png';
import { AnimatedLetters } from '../../assets/AnimatedLetters';
import Logo from './Logo';
import './index.scss';
import Loader from 'react-loaders';

export const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['P', 'A', 'R', 'S', 'H', ' ', 'C', 'H', 'A', 'N', 'D', 'R', 'A'];
  

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    // Cleanup the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hello,
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="Analyst" />
          {/* Assuming AnimatedLetters is a component that takes these props */}
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
          <br />
          Data Enthusiast
        </h1>
        <h2><a className="links" href='https://bcert.me/sqhwbfjut'>Certified ScrumMaster </a> / <a className="links2" href='https://www.sololearn.com/Certificate/CT-8LQ5DOFV/png'> Analyst </a>/ Consultant / Engineer</h2>
        <Link to="/Contact" className='flat-button'>HIRE ME</Link>
      </div>
       <Logo />
    </div>
    <Loader type="ball-clip-rotate-multiple" />
    </>
  );
}

