import './App.scss';
import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Nav from './components/Nav';
import Instructions from './components/Instructions';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  const [example, setExample] = useState()
  const [completed, setCompleted] = useState({one: false, two:false, three: false, four: false, five: false, six: false, seven: false})

   return (
    <Router >
      <div className="App">
        <Nav completed={completed} setExample={setExample}/>
        <div className='example-outr'>
          <Instructions example={example}/>
          <Dashboard setCompleted={setCompleted}/>
        </div>
         <Footer completed={completed}/>
      </div>
    </Router>
  );
}

export default App;
