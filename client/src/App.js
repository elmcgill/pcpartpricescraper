import React, {Component} from 'react';
import Parts from './components/parts/parts.js';
import Form from './components/form/form.js'
import './App.css';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      id: 0
    }
  }

  componentWillMount(){
    this.setState({
      id: Math.floor(Math.random() * 1000000000)
    })
  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Form id={this.state.id}/>
        <Parts id={this.state.id} />
      </div>
    );
  }
}

export default App;
