
import './App.css';

const Descriptor = ({desc:[word, num]}) => (
  <li key = {word}>{num} {word}</li>
)

const Numbers = ({numbers}) => (
  <ul style = {{listStyleType: 'none'}}>
    {numbers.map(number => (<Descriptor desc = {number}/> ) )}
  </ul>
)
function App() {
  const listahan = [
    ['one', 1],
    ['two', 2],
    ['three',3],
    ['four', 4]
  ]
  return (
    
    <div className="App">
      <Numbers numbers = {listahan}/>
    </div>
  );
}

export default App;
