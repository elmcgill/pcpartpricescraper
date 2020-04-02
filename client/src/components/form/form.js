import React, {Component} from 'react';

class Form extends Component{

    constructor(props){
        super(props);
        this.state = {
            amazonCPU: '',
            neweggCPU: '',
            amazonMOBO: '',
            neweggMOBO: '',
            amazonGPU: '',
            neweggGPU: '',
            amazonRAM: '',
            neweggRAM: '',
            amazonHDD: '',
            neweggHDD: '',
            amazonPSU: '',
            neweggPSU: '',
            amazonCASE: '',
            neweggCASE: '',
            amazonCooler: '',
            neweggCooler: '',
            amazonFans: '',
            neweggFans: '',
            partslist: this.props.partslist
        }
    }


    handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit happened');
        const sendData = {
            amazon:[
                {cpu: this.state.amazonCPU},
                {mobo: this.state.amazonMOBO},
                {gpu: this.state.amazonGPU},
                {ram: this.state.amazonRAM},
                {hdd: this.state.amazonHDD},
                {psu: this.state.amazonPSU},
                {case: this.state.amazonCASE},
                {cooler: this.state.amazonCooler},
                {fans: this.state.amazonFans}
            ],
            newegg: [
                {cpu: this.state.neweggCPU},
                {mobo: this.state.neweggMOBO},
                {gpu: this.state.neweggGPU},
                {ram: this.state.neweggRAM},
                {hdd: this.state.neweggHDD},
                {psu: this.state.neweggPSU},
                {case: this.state.neweggCASE},
                {cooler: this.state.neweggCooler},
                {fans: this.state.neweggFans}
            ]
        }

        /*
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sendData)
        };
        fetch('http://localhost:5000/input/', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        console.log(sendData);
        */

        this.setState({
            amazonCPU: '',
            neweggCPU: '',
            amazonMOBO: '',
            neweggMOBO: '',
            amazonGPU: '',
            neweggGPU: '',
            amazonRAM: '',
            neweggRAM: '',
            amazonHDD: '',
            neweggHDD: '',
            amazonPSU: '',
            neweggPSU: '',
            amazonCASE: '',
            neweggCASE: '',
            amazonCooler: '',
            neweggCooler: '',
            amazonFans: '',
            neweggFans: '',
            partslist: sendData
        });
        document.getElementById('partLinks').reset();
    }

    setBox = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        return(
            <div>
                <h1>Input part links below</h1>
                <form id='partLinks' onSubmit={this.handleSubmit}>
                    <h1>Core Components</h1>
                    <h3>CPU</h3>
                    <p><input type='text' placeholder='amazon link' name='amazonCPU' onInput={this.setBox}/></p>
                    <p><input type='text' placeholder='newegg link' name='neweggCPU' onInput={this.setBox}/></p>
                    <h3>Motherboard</h3>
                    <p><input type='text' placeholder='amazon link' name='amazonMOBO' onInput={this.setBox}/></p>
                    <p><input type='text' placeholder='newegg link' name='neweggMOBO' onInput={this.setBox}/></p>
                    <h3>GPU</h3>
                    <p><input type='text' placeholder='amazon link' name='amazonGPU' onInput={this.setBox}/></p>
                    <p><input type='text' placeholder='newegg link' name='neweggGPU' onInput={this.setBox}/></p>
                    <h3>RAM</h3>
                    <p><input type='text' placeholder='amazon link' name='amazonRAM' onInput={this.setBox}/></p>
                    <p><input type='text' placeholder='newegg link' name='neweggRAM' onInput={this.setBox}/></p>
                    <h3>SSD/HDD</h3>
                    <p><input type='text' placeholder='amazon link' name='amazonHDD' onInput={this.setBox}/></p>
                    <p><input type='text' placeholder='newegg link' name='neweggHDD' onInput={this.setBox}/></p>
                    <h3>PSU</h3>
                    <p><input type='text' placeholder='amazon link' name='amazonPSU' onInput={this.setBox}/></p>
                    <p><input type='text' placeholder='newegg link' name='neweggPSU' onInput={this.setBox}/></p>
                    <h3>Case</h3>
                    <p><input type='text' placeholder='amazon link' name='amazonCASE' onInput={this.setBox}/></p>
                    <p><input type='text' placeholder='newegg link' name='neweggCASE' onInput={this.setBox}/></p>
                    <h1>Additonal Components</h1>
                    <h3>CPU Coooler</h3>
                    <p><input type='text' placeholder='amazon link' name='amazonCooler' onInput={this.setBox}/></p>
                    <p><input type='text' placeholder='newegg link' name='neweggCooler' onInput={this.setBox}/></p>
                    <h3>Fans</h3>
                    <p><input type='text' placeholder='amazon link' name='amazonFans' onInput={this.setBox}/></p>
                    <p><input type='text' placeholder='newegg link' name='neweggFans' onInput={this.setBox}/></p>
                    <p><button>Submit for mailing updates</button></p>
                </form>
            </div>
        );
    }
}

export default Form;