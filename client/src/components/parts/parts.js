import React, {Component} from 'react';
import './parts.css';

class Parts extends Component{

    constructor(){
        super();
        this.state={
            parts: []
        }
    }

    componentDidMount() {
        fetch('/api/parts')
          .then(res => res.json())
          .then(parts => this.setState({parts}, () => console.log('Parts fetched...', parts)));
      }

    render(){
        return(
            <div>
                <h2>Parts List</h2>
                <ul>
                    {this.state.parts.map(part =>
                        <li key={part.id}>{part.type} : ${part.cost}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Parts;