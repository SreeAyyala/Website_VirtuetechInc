import React, {Component, Fragment} from "react";

class OES extends Component {
  render() {
    return (<Fragment>
      <div className="jumbotron" id="oes_jumbotron">
        <h2 className="display-4">Our Oracle EBS delivery methodology:</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <p className="lead p2">
              We come in at the pre-implementation stage. We assess the client’s current infrastructure from the databases and middleware in existence to the application landscape. We, then, work on an implementation blueprint post which our consultant come in to efficiently implement Oracle EBS for customers. We ensure our presence with the customer throughout the journey, even at the support stage, by offering our expertise and also our experienced consultants to ensure seamless functioning of the Oracle EBS suite.
            </p>
          </div>
        </div>
        <hr className="featurette-divider"/>
      </div>
    </Fragment>)
  }
}

export default OES;
