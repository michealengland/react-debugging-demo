import './App.css';
import Paragraph from './examples/example-1'
import InfiniteCounter from './examples/example-2'
import AnimalKingdom from './examples/example-3';

function App() {
  return (
    <div className="App">
      {/* <Paragraph
        textObj={{
            word1: 'hello',
            word2: 'goodbye',
        }}
      /> */}
      {/* <InfiniteCounter /> */}
      <AnimalKingdom />
    </div>
  );
}

export default App;
