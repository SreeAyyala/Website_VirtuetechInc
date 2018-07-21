import React, {Component, Fragment} from "react";

class OIU extends Component {
  render() {
    return (<Fragment>
      <div className="jumbotron text-white bg-dark" id="Header2_jumbotron">
        <h2 className="display-4">Oracle Implementations & Upgrades</h2>
        <p className="p-1">An organization has requirements for Software personnel for a certain period of time. The requirements may vary in terms of duration, skill set and experience.</p>
      </div>
      <div className="main_container" id="OracleInfo_container">
        <div className="row p-1">
          <p>
            <strong>EBS Implementations or Upgrades are Complex:</strong>
          </p>
          <p className="p-1">
            Technology is constantly changing.To meet your growing business needs one needs the technology upgrades.However, Oracle Implementations or Upgrades are complex as there are many moving parts. Oracle itself describes Oracle EBS as a software that is built on a 30-year history of innovation, and it continues to deliver new application functionality and expand the capabilities of existing features while helping businesses gain all the benefits of Oracle Cloud.
          </p>
          <p>Also, with technology, the problem many companies run into when trying to install or upgrade new Oracle applications often looks like one (or more) of these:</p>
          <ul>
            <li className="p-1">Maintaining Technical team on site may be expensive</li>
            <li className="p-1">Employees are already working on multiple projects with less bandwidth</li>
            <li className="p-1">Less expertise to understand the new product to make the right decisions while implementing</li>
          </ul>
        </div>
        <div className="row p-1">
          <p>
            <strong>Why VT Consultants?</strong>
          </p>
          <p>{''}</p>
          <ul>
            <li className="p-1">VT Consultants are a team of professionals trained in Oracle,and their expertise will allow you to increase your workflow and productivity.</li>
            <li className="p-1">We are experts in delivering successful, on-time and on-budget Oracle EBS projects.</li>
            <li className="p-1">Our Oracle E-Business Suite consulting team is vertically integrated and staffed by senior Oracle EBS, Fusion Middleware, and UPK experts who are also capable of deploying on-site or working remotely to execute projects throughout North America.</li>
          </ul>
          <p>
            <strong>Our Services:</strong>
          </p>
          <ul>
            <li className="p-1">Our services go beyond implementation; we collaborate with you to provide post-implementation services so you can meet your goals, expand your business, adapt to industry changes, and find ways to make your business more efficient.</li>
            <li className="p-1">We recognize your need for automated, reliable, scalable designs and enhancements for your business―from Oracle upgrades to the new entity or M&A rollouts.</li>
            <li className="p-1">We also offer off-shore, flexible support services manned by senior-level consultants skilled in Oracle e-Business Suite (EBS).</li>
            <li className="p-1">With this high level of assistance, your IT staff can focus more on value-adding business activities while VT takes charge of other back-end services such as application support and system administration.</li>
            <li className="p-1">Accelerate your company’s learning curve with the assistance of experienced VT consultants. We offer corporate training.</li>
          </ul>
        </div>
      </div>
    </Fragment>)
  }
}

export default OIU;
