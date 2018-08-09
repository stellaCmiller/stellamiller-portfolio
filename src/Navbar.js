import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Portfolio from './views/Portfolio';
import About from './views/About';
import Contact from './views/Contact';
import Resume from './views/Resume';
import Home from './views/Home'

class Navbar extends React.Component {
    render() {
        return <HashRouter>
            <div className="container-fluid new-bod">
                <nav id="landing-nav" className="vert-nav navbar navbar-expand-md navbar-light">
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/resume">Resume</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="content sticky">
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/resume" component={Resume} />
                    <Route path="/contact" component={Contact}/>
                </div>
            </div>
        </HashRouter>
    }
}

export default Navbar;