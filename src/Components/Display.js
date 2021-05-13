import React, { Component } from 'react'
import './css/style.css'

class Display extends Component {
    render() {
        return (
            <div className="display">
                <h3>{this.props.display}</h3>
            </div>
        )
    }
}

export default Display
