import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component{
    render () {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">Lead Managerd</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item"><link to="/register">Registrate</link></li>
                        <li className="nav-item"><link to="/login">Ingresa</link></li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}

export default Header