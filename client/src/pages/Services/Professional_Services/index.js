import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";

class ProfessionalServices extends Component {
  render() {
    return (<Fragment>
      <div className="jumbotron text-white " id="ProfessionalHeader_jumbotron">
        <div className="row d-flex flex-row justify-content-start">
          <div className="col-7 p-4">
            <h3 className="display-4">Professional Services</h3>
            <h3 className="p-1">Our IT professional services can support projects end-to-end through design review, architecture assessment, technology implementation and service or technology optimization.</h3>
          </div>
        </div>
      </div>
      <div className="main_container" id="ProfessionalServices_container">
        <p>
          <strong>We extend the power of our customers’ technical teams with deep expertise in technologies that can help them achieve strategic business outcomes.</strong>
        </p>
        <p>
          <strong>Why VT Professional Services?</strong>
        </p>
        <ul>
          <li>Let our experts help you harness the power of modern communication, enabling innovation and collaboration and helping you achieve extraordinary things.</li>
          <li>Our assessment services help you understand your complete environment and the opportunities to improve operations, arming you with the knowledge and context to create an effective plan and move forward with confidence.</li>
          <li>We deeply integrate into your organization to address all of your challenges and identify the best path to the realization of your strategic goals.</li>
          <li>We can help you determine your current state and prioritize your step-by-step roadmap that will help your business compete in an always-on world.</li>
          <li>We can help you build, maintain or upgrade your network infrastructure to meet today’s business requirements and be ready for tomorrow’s digital transformation.</li>
          <li>Our storage experts can guide you through your options, ensuring no matter what your business demands, your systems and storage will help you move faster.</li>
        </ul>
      </div>
    </Fragment>)
  }
}

export default ProfessionalServices;
