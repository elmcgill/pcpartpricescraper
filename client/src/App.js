import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Parts from './components/parts/parts.js';
import Form from './components/form/form.js'
import './App.css';
import Loading from "./components/loading/loading";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      partslist: {
        amazon:[],
        newegg:[]
      }
    }
  }

  updateList(partslist){
    this.setState({partslist: partslist});
  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router >
          <Switch>
            <Route path="/" exact component={() => <Form id={this.state.partslist} updateList={this.updateList}/>}/>
            <Route path="/parts" component={() => <Parts id={this.state.partslist} updateList={this.updateList}/>}/>
            <Route path="/loading" component={() => <Loading id={this.state.partslist} updateList={this.updateList}/>}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
