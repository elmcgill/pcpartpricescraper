import React, {Component} from 'react';
import Parts from './components/parts/parts.js';
import Form from './components/form/form.js'
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Form />
      </div>
    );
  }
}

export default App;
