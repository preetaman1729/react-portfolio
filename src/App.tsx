import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import React
 from 'react';
const App: React.FC = () => {
  
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        </Routes>
    </Router>
  )
}

export default App
