import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";

class OracleServices extends Component {
  render() {
    return (<Fragment>
      <div className="jumbotron text-white " id="OracleHeader_jumbotron">
        <div className="row d-flex flex-row justify-content-start">
          <div className="col-7 p-4">
            <h3 className="display-4">Leverage The Powerful ERP Functionality To Solve Big Problems with Small Budget.</h3>
            <h3 className="p-1">
              The key for our success is Strategy, Planning, Being Agile & Transparent. We believe in out of the box, scalable solutions.
            </h3>
          </div>
        </div>
      </div>
      <div className="main_container">
        <div id="vt_OracleServices">
          <h1>All VitrueTech Oracle-Services</h1>
          <h5>The following Catalogue showcase the various services provided by VitrueTech.</h5>
          <h5>You can learn more about them by clicking on each category</h5>
        </div>
        <hr className="p-3"/>
        <div className="sub_container">
          <div className="row">
            <div className="col">
              <i className="fa fa-cloud fa-5x" aria-hidden="true"></i>
              <h3 className="p-4">Oracle Cloud Services</h3>
              <p>Almost all large companies use Enterprise Resource Planning (ERP) systems for managing and optimizing their business processes. Among many companies across the world Cloud adoption is growing rapidly…</p>
              <p>
                <Link className="btn btn-secondary" to="/Oracle_Services/OIU" role="button">View details &raquo;</Link>
              </p>
            </div>
            <div className="col">
              <i className="fa fa-cloud fa-5x" aria-hidden="true"></i>
              <h3 className="p-4">Oracle Implementations & Upgrades</h3>
              <p>To meet your growing business needs, one needs the technology upgrades. However, Oracle Implementations or Upgrades are complex as there are many moving parts…</p>
              <p>
                <Link className="btn btn-secondary" to="/Oracle_Services/OIU" role="button">View details &raquo;</Link>
              </p>
            </div>
            <div className="col">
              <i className="fa fa-cloud fa-5x" aria-hidden="true"></i>
              <h3 className="p-4">Oracle Customization</h3>
              <p>Oracle EBS Is A Robust Enterprise Solution, But we still need to customize the application to meet the rapid business growth and to face the increased global competition.</p>
              <p>
                <Link className="btn btn-secondary" to="/Oracle_Services/OC" role="button">View details &raquo;</Link>
              </p>
            </div>
            <div className="col">
              <i className="fa fa-cloud fa-5x" aria-hidden="true"></i>
              <h3 className="p-4">Oracle Testing</h3>
              <p>VT - Regression Testing as a Service, Oracle is a very configurable ERP. While this allows businesses to be extremely flexible, it puts an enormous amount of stress on testing for changes.</p>
              <p>
                <Link className="btn btn-secondary" to="/Oracle_Services/OT" role="button">View details &raquo;</Link>
              </p>
            </div>
            <div className="col">
              <i className="fa fa-cloud fa-5x" aria-hidden="true"></i>
              <h3 className="p-4">VT's Oracle Consulting Services</h3>
              <p>An organization has requirements for Oracle consultants</p>
              <p>
                <Link className="btn btn-secondary" to="/Oracle_Services/OCS" role="button">View details &raquo;</Link>
              </p>
            </div>
          </div>

          <p className="p-4">Our experts are not just idealists but practical, understand customer priorities and find innovative ways to optimize business process while gaining predictability of costs.</p>
        </div>
      </div>
    </Fragment>)
  }
}

export default OracleServices;
