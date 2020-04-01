import React, {Component} from 'react';
import './parts.css';

class Parts extends Component{

    constructor(props){
        super(props);
        this.state={
            parts: []
        }
    }

    //componentDidMount() {
        //fetch(`http://localhost:5000/parts/`)
          //.then(res => res.json())
          //.then(parts => this.setState({parts}, () => console.log('Parts fetched...', parts)));
      //}

    getParts(){
        fetch(`http://localhost:5000/parts/`)
          .then(res => res.json())
          .then(parts => console.log('Parts fetched...', parts));
    }

    render(){
        return(
            <div>
                <h2>Parts List</h2>
                <button onClick={this.getParts}>Get Parts</button>
            </div>
        );
    }
}

export default Parts;