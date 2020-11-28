import React, { Component } from 'react'
import './error-button.css';

export default class ErrorButton extends Component {
    state = {
        errorOn: false
    };

    throwException(){
        this.setState({ errorOn: true });
    }

    render(){
        if (this.state.errorOn){
            this.setState(x=>x.errorOn = 2);
        }
        return <button className="btn btn-danger" onClick={() => this.throwException()}>Throw exception</button>
    }
}

