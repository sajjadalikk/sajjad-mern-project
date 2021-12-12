import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Error extends Component {
    render() {
        return (
           <div>
            <footer className="main-footer">
            <h1>Page not found. Go back to <Link to="/">Home page</Link></h1>
            </footer>
            </div>

        )
    }
}