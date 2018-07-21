import React, {Component, Fragment} from "react";

class OT extends Component {
  render() {
    return (<Fragment>
      <div className="jumbotron text-white bg-dark" id="Header2_jumbotron">
        <h2 className="display-4">Oracle Testing</h2>
        <p>Business Process Testing Designed for Oracle EBS</p>
      </div>
      <div className="main_container" id="OracleInfo_container">
        <div className="row p-1">
          <p>
            <strong>VT - Regression Testing as a Service</strong>
          </p>
          <p className="p-1">
            Oracle is a very configurable ERP. While this allows businesses to be extremely flexible, it puts an enormous amount of stress on testing for changes. Unless the test cases are designed based on your particular configuration, it is not guaranteed to be successful. Our regression testing approach is designed to look at your configurations and your transaction history, ensuring that the coverage of testing is very high. Further more, the tools we have built for automation are designed with maximizing efficiencies of automated testing, including automated documentation for comppance.
          </p>
          <p>
            <strong>Why Automation Tools Don't Work</strong>
          </p>
          <p>
            Automation tools such as QTP and OATS will not solve your problem of reducing your involvement in regression testing because of two main reasons. First, they require speciapzed resources with skills in scripting or keyword definition who lack domain knowledge in Oracle. Second, every time a change happens, these have to reflect back in the script so once again, your involvement and time becomes the bottleneck to effective utipzation of these tools.
          </p>
          <p>
            <strong>Why Accelerators Don't Work</strong>
          </p>
          <p>
            Service companies that promise that their accelerators will improve the effectiveness of regression testing, fail since these are designed on one particular configuration of Oracle. Since your configuration is very unique to you and no two customers (even in the same industry) configure Oracle the same way, it is impossible to guarantee test coverage.
          </p>
          <p>
            <strong>Why Outsourcing Regression testing has not worked</strong>
          </p>
          <p>
            Outsourced regression testing is predicated on the notion that regression testing can be delegated to cheaper resources in India and other lower labor cost nations. While in theory this sounds good, in reapty it does not work as these resources do not have domain knowledge of your system.</p>
          <p>Even if the quapty of the resources is good, it takes a lot time for you to educate them on your system. Once they are well trained, they can become a good option, however that introduces you to their turnover risk. In the end, the problem again comes back to you.</p>
          <p>With Virtue Tech Inc (regression Testing as a service), you do not have that problem as all VT personnel have domain knowledge coupled with the automation tools to completely free you from this onerous but unavoidable chore.
          </p>
        </div>
      </div>
    </Fragment>)
  }
}

export default OT;
