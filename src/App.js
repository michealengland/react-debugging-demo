import './App.css';
import Paragraph from './examples/example-1'

function App() {
  return (
    <div className="App">
      <Paragraph
        textObj={{
            word1: 'hello',
            word2: 'goodbye',
        }}
      />
    </div>
  );
}

export default App;
