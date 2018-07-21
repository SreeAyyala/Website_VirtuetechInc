import React, {Component, Fragment} from "react";

class OCS extends Component {
  render() {
    return (<Fragment>
      <div className="jumbotron text-white bg-dark" id="Header2_jumbotron">
        <h2 className="display-4">VT's Oracle Consulting Services</h2>
        <p>Helping businesses in defining sustainability, process optimization, business-streamlining enhancements and cost savings using oracle products and best practices.</p>
      </div>
      <div className="main_container">
        <div className="row" id="OracleInfo_container">
          <p>
            <strong>An organization has requirements for Oracle consultants for a certain period of time</strong>
          </p>
          <ul>
            <li className=" p-1">On their implementation / upgrade / customization projects. The requirements may vary in terms of duration, skill set and experience.</li>
            <li className=" p-1">Virtue Tech Inc provides the services of its personnel to Clients for such assignments.Virtue Tech has a combination of both senior and junior consultants.</li>
            <li className="p-1">Any of these personnel operate as internal resources for the client organization. All Junior consultants are still backed up by the senior team at Virtue Tech Inc. This gives organizations onsite presence of a resource with inputs of senior and high end resources. The cost benefit is unmatched.</li>
            <li className="p-1">The availability of a good pool of resources with the right skill set and experience reduces the risk coming from quality and attrition.</li>
          </ul>
        </div>
      </div>
    </Fragment>)
  }
}

export default OCS;
