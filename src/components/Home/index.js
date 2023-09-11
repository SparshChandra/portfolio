// import { Link } from 'react-router-dom';
// import LogoTitle from '../../assets/images/logo-s.png';
// import './index.scss';

// const Home = () =>  {
//     const [letterClass, setLetterClass] = useState('text-animate')
//     const nameArray = ['S', 'P', 'A', 'R', 'S', 'H']
//     const jobArray = ['D', 'A', 'T', 'A', ' ', '&', ' ', 'B', 'U', 'S', 'I', 'N', 'E', 'S', 'S', ' ', 'A', 'N', 'A', 'L', 'Y', 'S', 'T', '.']


//     return (
//         <div className="container home-page">
//           <div className="text-zone">
//                 <h1>Hi, 
//                     <br />I'm    
//                 <img src={LogoTitle} alt="Analyst" />
//                 <AnimatedLetters letterClass={letterClass}
//                 strArray={nameArray}
//                 idx={15} />
//                 <br />
//                 Data and Business Analyst
//                 </h1>
//                 <h2>Analyst / Consultant / Certified ScrumMaster / YouTuber</h2>
//                 <Link to="/Contact" className='flat-button' >CONTACT ME</Link>
//             </div>    

//           </div>
//     );
// }

// export default Home


// import React, { useState, useEffect } from 'react'; // Import useState from React
// import { Link } from 'react-router-dom';
// import LogoTitle from '../../assets/images/logo-s.png';
// import './index.scss';
// import { AnimatedLetters } from '../../assets/AnimatedLetters';

// // Assuming AnimatedLetters is a custom component, import it here
//  // Replace './AnimatedLetters' with the correct path

// const Home = () => {
//   const [letterClass, setLetterClass] = useState('text-animate');
//   const nameArray = ['P', 'A', 'R', 'S', 'H', ' ', 'C', 'H', 'A', 'N', 'D', 'R', 'A'];
//   const jobArray = [
//     'D', 'A', 'T', 'A', ' ', '&', ' ', 'B', 'U', 'S', 'I', 'N', 'E', 'S', 'S', ' ', 'A', 'N', 'A', 'L', 'Y', 'S', 'T', '.'
//   ];

//   useEffect(() => {
//     return setTimeout(() => {
//         setLetterClass('text-animate-hover')
//     }, 4000)
//   }, [])

//   return (
//     <div className="container home-page">
//       <div className="text-zone">
//         <h1>
//           Hi,
//           <br />
//           <span className={`${letterClass} _13`}>I</span>
//           <span className={`${letterClass} _14`}>'m</span>
//           <img src={LogoTitle} alt="Analyst" />
//           {/* Assuming AnimatedLetters is a component that takes these props */}
//           <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
//           <br />
//           Data and Business Analyst
//         </h1>
//         <h2>Analyst / Consultant / Certified ScrumMaster / YouTuber</h2>
//         <Link to="/Contact" className='flat-button'>CONTACT ME</Link>
//       </div>
//     </div>
//   );
// }

// export default Home;


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
  const jobArray = [
    'D', 'A', 'T', 'A', ' ', '&', ' ', 'B', 'U', 'S', 'I', 'N', 'E', 'S', 'S', ' ', 'A', 'N', 'A', 'L', 'Y', 'S', 'T', '.'
  ];

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
        <h2>Certified ScrumMaster / Analyst / Consultant / Engineer</h2>
        <Link to="/Contact" className='flat-button'>HIRE ME</Link>
      </div>
       <Logo />
    </div>
    <Loader type="ball-clip-rotate-multiple" />
    </>
  );
}

