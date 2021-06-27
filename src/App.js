import './App.scss';
import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Nav from './components/Navbar/Nav';
import Instructions from './components/Instructions';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  const defaultState = {one: false, two:false, three: false, four: false, five: false, six: false, seven: false}
  const [example, setExample] = useState()
  const [completed, setCompleted] = useState(defaultState)
  const [modal, setModal] = useState(false)
  const openModal = () => {
    setModal(true)
  };

  const closeModal = () => {
    setModal(false)
  }

   return (
    <Router >
      <div className="App">
        <Nav completed={completed} setExample={setExample}/>
        <div className='example-outr'>
          <Instructions example={example} setCompleted={setCompleted}/>
          <Dashboard setCompleted={setCompleted}/>
        </div>
         <Footer completed={completed} openModal={openModal} closeModal={closeModal} modal={modal} setCompleted={setCompleted} defaultState={defaultState}/>
      </div>
    </Router>
  );
}

export default App;
