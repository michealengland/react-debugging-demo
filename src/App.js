import './App.css';
import { useState, useEffect } from 'react';
import Paragraph from './examples/example-1'
import InfiniteCounter from './examples/example-2'
import AnimalKingdom from './examples/example-3';
import Giraffes from './examples/example-4';
import Elephant from './examples/example-5';
import Tiger from './examples/example-6';

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
	// const [giraffeCount, setGiraffeCount] = useState(null);

  // useEffect(() => {
  //   const fetchGiraffeCount = () => new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve('20');
  //     }, 600);
  //   })
  //   .then((result) => {
  //     setGiraffeCount(result)
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });

  //   if (giraffeCount === null) {
  //     fetchGiraffeCount();
  //   }
  // }, [giraffeCount]);

  return (
    <div className="App">
      {/* <Paragraph
        textObj={{
            word1: 'hello',
            word2: 'goodbye',
        }}
      /> */}
      {/* <InfiniteCounter /> */}
      {/* <AnimalKingdom /> */}
      {/* <Giraffes numberOfGiraffes={giraffeCount} /> */}
      {/* <Elephant /> */}
      <Tiger tigerTraits={tigerTraits} />
    </div>
  );
}

export default App;
