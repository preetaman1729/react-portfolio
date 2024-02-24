// # File name: App.tsx
// # Student’s Name: Amanpreet Kaur
// # StudentID: 301308654
// # Date: 23rd February 2024

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Services from './components/Services';
import React
 from 'react';
const App: React.FC = () => {
  
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/project' Component={Projects}/>
        <Route path='/services' Component={Services}/>
      </Routes>
    </Router>
  )
}

export default App
