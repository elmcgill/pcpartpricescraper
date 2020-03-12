import React, {Component} from 'react';

class Form extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            partlist: ''
        }
    }


    handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit happened');
        console.log(this.state);
        const data = this.state;
        this.setState({
            email:'',
            partlist:''
        });
        document.getElementById('emailAndListForm').reset();
    }

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render(){
        const{email} = this.state;
        const{partlist} = this.state;
        return(
            <div>
                <h1>Input your email and partslist</h1>
                <p>Email is: {email}</p>
                <p>Parts list is : {partlist}</p>
                <form id='emailAndListForm' onSubmit={this.handleSubmit}>
                    <p><input type='text' placeholder='email here' name='email' onChange={this.handleInputChange}/></p>
                    <p><input type='text' placeholder='partslist here' name='partlist' onChange={this.handleInputChange}/></p>
                    <p><button>Submit for mailing updates</button></p>
                </form>
            </div>
        );
    }
}

export default Form;