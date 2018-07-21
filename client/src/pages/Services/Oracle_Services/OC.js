import React, {Component, Fragment} from "react";

class OC extends Component {
  render() {
    return (<Fragment>
      <div className="jumbotron text-white bg-dark" id="Header2_jumbotron">
        <h2 className="display-4">Oracle Customization</h2>
        <p className=" p-1">you can develop customizations and extend the functionality of Oracle E-Business Suite using development tools.</p>
      </div>
      <div className="main_container" id="OracleInfo_container">
        <div className="row p-1">
          <p>
            <strong>Oracle EBS Is A Robust Enterprise Solution,</strong>
          </p>
          <p>
            But we still need to customize the application to meet the rapid business growth and to face the increased global competition.<br/>However, you would like to keep the investment low to maintain and upgrade the applications. The investment that you have made in these customizations needs to be continuously evaluated to ensure that it is driving value for your company.
          </p>
          <p>
            <strong>When transitioning your business to the Oracle Cloud and its associated applications,</strong>
          </p>
          <p>
            it’s important to work with a trained Oracle consultant and certified Oracle architects.VT consultants, as experts in oracle cloud and EBS can help with smooth deployment of these customizations.
            <br/>Once you have extended and tested your business process flows on Oracle Cloud, you can move these customizations to on-premises QA or production environments. Oracle Application Management Suite delivers the automation to manage and promote customizations from Oracle Cloud to on-premises and vice versa.
          </p>
          <p>
            <strong>Many consultants try to customize software by taking a “requirements” approach,</strong>
          </p>
          <p>
            which means they go through your requirements and try to build the software from the ground up.This takes time and often results in delays and unexpected problems. In fact, about 68 percent of IT projects fail or experience unexpected problems throughout the process.
          </p>
          <p>
            <strong>With a well-trained and certified Oracle consulting firm, you can avoid these common pitfalls by taking a customization approach.</strong>
          </p>
          <p>Instead of building an application from scratch to fit your business, we can combine several proven Oracle applications and then customize them to fit your business requirements.You can leverage the following customization manager capabilities of Application Management Suite:</p>
          <ul >
            <li className="p-1">Discover your inventory of customizations and report them by object type or by E-Business Suite module.</li>
            <li className="p-1">Integrate with third-party source control systems on premises to check out source code.</li>
            <li className="p-1">Validate and register custom objects.</li>
            <li className="p-1">Ensure that your custom code adheres to Oracle standards and your internal standards.</li>
            <li className="p-1">Run Oracle E-Business Suite Release 12.2 Readiness reports to ensure that your customizations are compatible with online patching standards.</li>
            <li className="p-1">Build custom packages and deploy and promote customizations across environments.
            </li>
            <li className="p-1">Promote Oracle patches and custom patches in a predefined sequence using patch promotion policies.
            </li>
          </ul>
          <p>With a 95 percent success rate, you can save time and money by working with an Oracle consulting firm like {' '}
            <strong>VirtueTech Inc Consulting to transition your enterprise to new cloud-based solutions.</strong>
          </p>
        </div>
      </div>
    </Fragment>)
  }
}

export default OC;
