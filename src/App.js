import './App.scss'
import { Route, Routes } from 'react-router-dom'; // Import the Route component
import {Layout} from './components/Layout'
import {Home} from './components/Home';
import {About} from './components/About'
import Contact from './components/Contact';
import Experience from './components/Experience'

function App() {
  return (
    <>
      <Routes>
       <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
