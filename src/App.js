import './App.css';
import { useState, useEffect } from 'react';
import Paragraph from './examples/example-1'
import InfiniteCounter from './examples/example-2'
import AnimalKingdom from './examples/example-3';
import Giraffes from './examples/example-4';

function App() {
	const [giraffeCount, setGiraffeCount] = useState(null);

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
    <div className="App">
      {/* <Paragraph
        textObj={{
            word1: 'hello',
            word2: 'goodbye',
        }}
      /> */}
      {/* <InfiniteCounter /> */}
      {/* <AnimalKingdom /> */}
      <Giraffes numberOfGiraffes={giraffeCount} />
    </div>
  );
}

export default App;
