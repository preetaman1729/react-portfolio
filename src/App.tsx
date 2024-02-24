import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import React
 from 'react';
const App: React.FC = () => {
  
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        </Routes>
    </Router>
  )
}

export default App
