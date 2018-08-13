import React, {Component} from "react";
import {Link} from "react-router-dom";
class Footer extends Component {
  render() {
    return (<footer className="panel-footer">
      <div className="footer_container">
        <div className="row">
          <div className="col-3" id="brand">
            <div className="row">
              <Link className="brand" to="/"><img src="./assets/logo_full.png" alt="VirutueTechInc" width="230px" height="100px"/></Link>
            </div>
            <div className="row">
              <i className="fa fa-map-marker  p-1" aria-hidden="true">
                2018F, 156th Avenue N.E, Suite 176, Bellevue, WA-98007</i>
            </div>
            <div className="row">
              <i className="fa fa-phone  p-1" aria-hidden="true">+1(347)-891-5103</i>
            </div>
            <div className="row">
              <i className="fa fa-envelope-o  p-1" aria-hidden="true">contact.us@virtuetechinc.com</i>
            </div>
          </div>
          <div className="col-3" id="links">
            <Link className="nav-link" to="/" id="footer_link">
              <span>Home</span>
            </Link>
            <Link className="nav-link" to="/About" id="footer_link">
              <span>About-Us</span>
            </Link>
            <Link className="nav-link" to="/Blog" id="footer_link">
              <span>Blog</span>
            </Link>
            <Link className="nav-link" to="/ContactUs" id="footer_link">
              <span>Contact-Us</span>
            </Link>
          </div>
          <div className="col-3">
            <img src="./assets/oracle-logo.png" alt="oracle-logo" width="220px" height="130px"></img>
          </div>
          <div className="col-3 text-center" id="connect">
            <span>Connect With Us:</span><br/>
            <a href="https://www.facebook.com/virtuetechus/" target="_blank" rel="noopener noreferrer">
              <span className="fa-stack fa-1x">
                <i className="fa fa-circle-thin fa-stack-2x"></i>
                <i className="fa fa-facebook fa-stack-1x"></i>
              </span>
            </a>
            <a href="https://www.linkedin.com/company/virtuetechinc/" target="_blank" rel="noopener noreferrer">
              <span className="fa-stack fa-1x">
                <i className="fa fa-circle-thin fa-stack-2x"></i>
                <i className="fa fa-linkedin fa-stack-1x"></i>
              </span>
            </a>
            <a href="https://twitter.com/Virtuetech_us" target="_blank" rel="noopener noreferrer">
              <span className="fa-stack fa-1x">
                <i className="fa fa-circle-thin fa-stack-2x"></i>
                <i className="fa fa-twitter fa-stack-1x"></i>
              </span>
            </a>
          </div>
        </div>
        <hr/>
        <div className="text-center" id="copyright">
          Copyright &copy; 2018 by VIRTUETECH Inc</div>
      </div>
    </footer>)
  }
}

export default Footer;
