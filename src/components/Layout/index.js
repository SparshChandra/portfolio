// import './index.scss'

// const Layout = () => {
//     return (
//     <>
//       <Sidebar/>
//     </>
//     )  
// }

// export default Layout



// import React from 'react';
// import './index.scss'; // Import your styles
// import Sidebar from '../Sidebar'; // Import the Sidebar component with the correct path

// const Layout = () => {
//   return (
//     <div className="App">
//       <Sidebar />
//       <div className='page'>
//         <span className='tags top-tags'>&lt;body&gt;</span>

//         <Outlet />

//         <span className='tags bottom-tags'>
//         &lt;body&gt;
//         <br />
//         <span className='bottom-tag-html'>&lt;body&gt;
         

//         </span>

//         </span>

//      {/* Add other content for your layout */}
//       </div>
//     </div>
//   );
// }

// export default Layout;

import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet from React Router
import './index.scss';
import Sidebar from '../Sidebar';

export const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className='page'>
        <span className='tags top-tags'></span>

        <Outlet /> {/* Use Outlet component from React Router here */}

        <span className='tags bottom-tags'>
         
          <br />
          <span className='bottom-tag-html'></span>
        </span>

        {/* Add other content for your layout */}
      </div>
    </div>
  );
}



