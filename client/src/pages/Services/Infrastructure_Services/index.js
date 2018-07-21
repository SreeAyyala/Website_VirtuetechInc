import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";

class InfrastructureServices extends Component {
  render() {
    return (<Fragment>
      <div className="jumbotron text-white " id="InfrastructureHeader_jumbotron">
        <div className="row d-flex flex-row justify-content-start">
          <div className="col-7 p-4">
            <h3 className="display-4">Infrastructure Services</h3>
            <h3 className="p-1">Virtue Tech Inc Infrastructure Services equip a customer’s business with round-the-clock support through the state-of-the art delivery center.</h3>
          </div>
        </div>
      </div>
      <div className="main_container">
        <div className="row p-1">
          <p className="p-1">
            Complexity in managing the IT Infrastructure, surging maintenance costs and the lack of proper resources to manage the IT infrastructure across various departments are major challenges faced by organizations today.
          </p>
          <p>
            <strong>Data Centre Services</strong>
          </p>
          <p>
            Managing enterprise data center facilities is a critical function for ensuring business continuity and maximizing productivity. Virtue Tech Inc Data Center Solution offerings work with enterprise organizations to develop data center road maps, plan and execute migrations, consolidations, build outs and moves.

          </p>
          <p>
            Virtue Tech Inc target environments include hosted sites, various managed solutions, public and private clouds and migrations between client-owned data centers. Virtue Tech Inc delivery model is flexible with turnkey solutions to partnering with clients based on their needs to complete the intended transition.
          </p>
          <p>
            <strong>Data Centre Assessment</strong>
          </p>
          <p>
            Virtue Tech Inc help you to manage your IT Infrastructure to make efficient use of hardware and IT resources by providing in lower TCO, CAPEX and OPEX.</p>
          <p>
            <strong>Data Centre Build and Migration</strong>
          </p>
          <p>
            Enterprise organizations data centre assets may be insufficient for future growth, or consist of a vast array of diverse and costly facilities. Virtue Tech Inc Data Centre migration or consolidation offering helps organizations increase capacity, cut costs and simplify process.</p>
          <p>
            <strong>Data Centre Management</strong>
          </p>
          <p>
            With Virtue Tech Inc Data Center Management Services, it is possible to provision, manage, and address the organizational needs to ensure continuous delivery of data center operations and management services to its customers and end users for all mission- and business-critical applications. These services also allow the flexibility to address the ever-changing business demands, market trends, and cost pressures.</p>
        </div>
      </div>
    </Fragment>)
  }
}

export default InfrastructureServices;
