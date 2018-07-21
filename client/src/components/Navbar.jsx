import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
  render() {
    return (<Fragment>
      <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/"><img src="./assets/Logo_full.png" alt="VirutueTechInc" width="350px" height="130px"/></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="nav navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <span>Home</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span>Services</span>
              </span>
              <div className="dropdown-menu">
                <Link className="dropdown-item nav-link" to="/Cloud_Services">Cloud Services</Link>
                <Link className="dropdown-item nav-link" to="/Oracle_Services">Oracle Services</Link>
                <Link className="dropdown-item nav-link" to="/Infrastructure_Services">Infrastructure Services</Link>
                <Link className="dropdown-item nav-link" to="/Professional_Services">Professional Services</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Trainings">
                <span>Training</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                <span>About-Us</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Blog">
                <span>Blog</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ContactUs">
                <span>Contact-Us</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>)
  }
}

export default Navbar
