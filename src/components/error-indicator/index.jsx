import React, {Component} from "react"
import './style.css'
import icon from './death-star.png'

export default class ErrorIndicator extends Component {
    render() {
        return (
            <div className="error-indicator">
                <i className="fa fa-frown-o mb-3" />
                <div className="h4">ERROR!</div>
                <div>Something has gone wrong!</div>
            </div>
        )
    }
}
