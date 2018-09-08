import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";

class CloudServices extends Component {
  render() {
    return (<Fragment>
      <div className="jumbotron text-white " id="CloudHeader_jumbotron">
        <div className="row d-flex flex-row justify-content-start">
          <div className="col-7 p-4">
            <h3 className="display-4">Cloud Services</h3>
            <h3 className="p-1">There are many challenges organizations face in today’s world to migrate their infrastructure to cloud.
            </h3>
          </div>
        </div>
      </div>
      <div className="main_container">
        <div id="vt_CloudServices">
          <h3>Organizations required to have a strategic partner to advice their business transformation in the digital and agile world.
          </h3>
          <h5>Virtue Tech is the right partner with proper strategy, alignment, roadmap and workshop based approach helps organizations to less worry in the digital transformation and agility.</h5>
        </div>
      </div>
      <hr className="p-3"/>
      <div className="sub_container">
        <div className="row">
          <div className="col-3">
            <i className="fa fa-cloud fa-5x" aria-hidden="true"></i>
            <h3 className="p-4">Cloud Assessment and Strategy</h3>
            <p>Today, majority of organizations having a cloud migration strategy. As this is the initial phase in migrating to cloud, Virtue Tech’s cloud Assessment and strategy is suitable for a scalable, reliable, and cost-effective cloud strategy.</p>
            <p>
              <Link className="btn btn-secondary" to="/Oracle_Services/OIU" role="button">View details &raquo;</Link>
            </p>
          </div>
          <div className="col-3">
            <i className="fa fa-cloud fa-5x" aria-hidden="true"></i>
            <h3 className="p-4">Cloud Transformation and Migration</h3>
            <p>When planning to transform your infrastructure to cloud, Virtue Tech’s migration model, Transition Framework, capacity planning and its expertise helps organizations transformation and migration seamless, quick with the advantage of scalability and flexibility.</p>
            <p>
              <Link className="btn btn-secondary" to="/Oracle_Services/OC" role="button">View details &raquo;</Link>
            </p>
          </div>
          <div className="col-3">
            <i className="fa fa-cloud fa-5x" aria-hidden="true"></i>
            <h3 className="p-4">Cloud Engineering and Automation</h3>
            <p>Virtue Tech’s Cloud Engineering and Automation solution, enables you to leverage existing or build new cloud data centers with proactive advice, guidance, and direction which helps organizations maximize ROI, reliability, security and improve your scalability.</p>
            <p>
              <Link className="btn btn-secondary" to="/Oracle_Services/OT" role="button">View details &raquo;</Link>
            </p>
          </div>
          <div className="col-3">
            <i className="fa fa-cloud fa-5x" aria-hidden="true"></i>
            <h3 className="p-4">Managed Services for Cloud</h3>
            <p>Complexity in managing the cloud infrastructure, surging maintenance costs and the lack of proper resources to manage the cloud infrastructure across various departments are major challenges faced by organizations today.</p>
            <p>
              <Link className="btn btn-secondary" to="/Oracle_Services/OCS" role="button">View details &raquo;</Link>
            </p>
          </div>
        </div>
      </div>
      <p className="p-4">Virtue Tech enables customer growth through increased ROI, lowered TCO, and seamless cloud operations, providing cloud management services to customers globally, utilizing best practice methodologies, integrated processes, with a proven global delivery model.</p>
    </Fragment>)
  }
}

export default CloudServices;
