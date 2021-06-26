import './App.scss';
import React, { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import Paragraph from './examples/example-1'
import InfiniteCounter from './examples/example-2'
import AnimalKingdom from './examples/example-3';
import Giraffes from './examples/example-4';
import Elephant from './examples/example-5';
import Tiger from './examples/example-6';
import RangeSlider from './examples/example-7';

function App() {

  const tigerTraits = {
    age: 6,
    color: 'orange',
    stripeColor: 'black',
    type: 'feline',
    weight: 'heavy',
  }

  console.log(
    {tigerTraits}
  );
	const [giraffeCount, setGiraffeCount] = useState(null);
  const [completed, setCompleted] = useState({one: false, two:false, three: false, four: false, five: false, six: false, seven: false})

  useEffect(() => {
    const fetchGiraffeCount = () => new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('20');
      }, 600);
    })
    .then((result) => {
      setGiraffeCount(result)
    })
    .catch((err) => {
      console.error(err);
    });

    if (giraffeCount === null) {
      fetchGiraffeCount();
    }
  }, [giraffeCount]);

  return (
    <Router >
      <div className="App">
        <Nav completed={completed}/>
        <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route path="/example1" component={() => <Paragraph textObj={ { word1: 'Welcome', word2: 'to',}}/>}></Route>
            <Route path="/example2" component={InfiniteCounter}></Route>
            <Route path="/example3" component={AnimalKingdom}></Route>
            <Route path="/example4" component={Giraffes} ></Route>
            <Route path="/example5" component={Elephant}></Route>
            <Route path="/example6" component={() => <Tiger tigerTraits={tigerTraits}/>}></Route>
            <Route path="/example7" component={RangeSlider}></Route>
            <Route render={() => <h1>404</h1>}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
