import React, { Component } from 'react'
import Display from './Display'
import Nums from './Nums'
import Result from './Result'

class Calc extends Component {

    state = {
        display: 0,
        result: 0,
        decimal: ".00"
    }

    // to update final result
    setResult = (updates) => {
        this.setState(updates);
    }

    render() {
        var result = this.state.result;
        var display = this.state.display;
        var decimals = this.state.decimal;
        return (
            <div>
                <Result result={result} decimals={decimals}/>
                <Display display={display}/>
                <Nums setResult={this.setResult}/>
                <Foot />                
            </div>
        )
    }
}

export default Calc
