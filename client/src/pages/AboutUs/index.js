import React, {Component} from "react";
import Vision from './Vision_Mission';
import Team from './Team'

class About extends Component {
  render() {
    return (<div>
      <div className="jumbotron bg-dark text-white" id="AboutUsHeader_jumbotron">
        <h2 className="display-4">About VirtueTech Inc</h2>
      </div>
      <div className="container">
        <h3>Who We Are?</h3>
        <p>Virtue Tech Inc is a global IT services company that enables organizations to implement, adopt and manage Oracle Applications, Cloud Infrastructure, and Integration solutions. Our core competency is delivering custom projects and services for clients who have limited cloud experience on staff or who need additional resources.</p>
        <p>We keep our clients’ priorities as our top priority and leverage the best technology available to provide a solution that is unique to their project requirements. We listen to clients and deliver with quality on time and within budget. We work with companies across all verticals including photo stock, Health Care, Financial, and education.
        </p>
        <p>
          We take Ownership and personal responsibility for meeting each client’s needs. We listen to clients and deliver with quality on time and within budget. We communicate and let our Client know if there are any obstacles that prevent our delivery and lastly we make every effort to exceed our clients’ expectations.
        </p>
        <p>
          We are headquartered in Seattle, WA with offices in Hyderabad & Visakhapatnam, India.
        </p>
        <hr className="p-3"/>
      </div>
      <Vision/>
      <Team/>
    </div>)
  }
}

export default About;
