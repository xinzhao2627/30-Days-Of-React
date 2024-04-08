
import './App.css';
import React from 'react';

class Header extends React.Component{
  state = {
    count: 0,
    status: false
  }
  increaser(){
    
  }
  render(){
    const count = this.state.count
    const stat = this.state.status
    const increase = () => {
      this.setState({count: this.state.count + 1})
      this.setState({status: !this.state.status})
    }
    const truth_value = () => (stat) ? 'true' : 'false' 
    return (
    <div>
      <h1>{count}</h1>
      <h2>{truth_value
      }</h2>

      <button onClick={increase}>press to increase</button>
    </div>)
  }
}

function App() {
  return (
    <div className="App">
      <Header data = 'hahaa'/>
    </div>
  );
}

export default App;
