import React, {Component} from "react";

class Header extends Component {
  render() {
    return (<div className="row page_header bg-dark text-white">
      <div className="col">
        <span className="p-2">
          <i className="fa fa-phone  p-1" aria-hidden="true"></i>+1(347)-891-5103</span>
        <span className="p-2">
          <i className="fa fa-envelope-o  p-1" aria-hidden="true"></i>contact.us@virtuetechinc.com</span>
      </div>
      <div className="col text-center" id="connect_1">
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
    </div>)
  }
}

export default Header;
