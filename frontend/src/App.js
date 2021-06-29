import React from 'react'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Content from './components/layout/Content';
function App() {
  return (
    <div className="App">
      <Router>
        <Content/>
      </Router>
    </div>
  );
}

export default App;
