import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";
class Footer extends Component {
  render() {
    return (<Fragment>
      <div className="partner_container p-3">
        <div className="p-3 ">
          <h3>Our Customers</h3>
        </div>
        <div className="row">
          <div className="col">
            <img src="../assets/partner_logos/AT&T_Logo.png" alt="company" width="150px" height="75px"></img>
          </div>
          <div className="col">
            <img src="../../assets/partner_logos/Getty_Images_Logo.png" alt="company" width="150px" height="75px"></img>
          </div>
          <div className="col">
            <img src="../assets/partner_logos/Change_HealthCare_Logo.png" alt="company" width="150px" height="75px"></img>
          </div>
          <div className="col">
            <img src="../assets/partner_logos/Biogen_Logo.png" alt="company" width="150px" height="75px"></img>
          </div>
          <div className="col">
            <img src="../assets/partner_logos/Hitachi_Logo.png" alt="company" width="150px" height="75px"></img>
          </div>
          <div className="col">
            <img src="../assets/partner_logos/Ness_Logo.png" alt="company" width="150px" height="75px"></img>
          </div>
        </div>
      </div>
      <footer className="panel-footer p-3">
        <div className="footer_container">
          <div className="row">
            <div className="col">
              <div className="row">
                <Link className="brand" to="/"><img src="./assets/company_logos/logo_full.png" alt="VirutueTechInc" width="230px" height="100px"/></Link>
              </div>
              <div className="row text-center" id="connect">
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
            <div className="col">
              <div className="row">
                <i className="fa fa-book  p-1" aria-hidden="true">2018F, 156th Avenue N.E, Suite 176, Bellevue, WA-98007</i>
              </div>
              <div className="row">
                <i className="fa fa-phone  p-1" aria-hidden="true">+1(347)-891-5103</i>
              </div>
              <div className="row">
                <i className="fa fa-envelope-o  p-1" aria-hidden="true">contact.us@virtuetechinc.com</i>
              </div>
            </div>
            <div className="col-3">
              <div className="row">
                <img src="./assets/partner_logos/AWS_Logo.png" alt="aws-logo" width="140px" height="70px"></img>
              </div>
              <div className="row">
                <img src="./assets/partner_logos/Oracle_Logo.png" alt="oracle-logo" width="140px" height="70px"></img>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col text-center" id="copyright">
            Copyright &copy; 2018 by VIRTUETECH Inc</div>
        </div>
      </footer>
    </Fragment>)
  }
}

export default Footer;
