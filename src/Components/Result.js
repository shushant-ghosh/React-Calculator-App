import React, { Component } from 'react'

class Result extends Component {
    render() {
        return (
            <div className="result">
                <strong>{this.props.result}</strong>
                <span className="dec">{this.props.decimals}</span>
            </div>
        )
    }
}

export default Result
