import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
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
        
        <Route path='/project' Component={Projects}/>
        <Route path='/services' Component={Services}/>
      </Routes>
    </Router>
  )
}

export default App
