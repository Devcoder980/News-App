import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';


export class Navbar extends PureComponent {


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" to="/">NewsAdda</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-uppercase" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-a " aria-current="page" to="#">Home</a>
                            </li>
                            <li className="nav-item">
                               <a className="nav-a" to="/about">Entertainment</a>
                            </li>
                            <li className="nav-item">
                               <a className="nav-a" to="/about">General</a>
                            </li>
                            <li className="nav-item">
                               <a className="nav-a" to="/about">Health</a>
                            </li>
                            <li className="nav-item">
                               <a className="nav-a" to="/about">Sciences</a>
                            </li>
                            <li className="nav-item">
                               <a className="nav-a" to="/about">Oorts</a>
                            </li>
                            <li className="nav-item">
                               <a className="nav-a" to="/about">Technology</a>
                            </li>
                             
                            
                             
                             
                             
                             
                             
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar