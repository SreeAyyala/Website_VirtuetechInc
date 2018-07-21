import React, {Component, Fragment} from "react";

class Blog extends Component {
  render() {
    return (<Fragment>
      <div className="jumbotron bg-dark text-white" id="blog_jumbotron">
        <div className="row d-flex flex-row justify-content-start">
          <div className="col-7 p-4">
            <h3 className="display-4">Blogging has quickly become one of the most popular ways of communicating and spreading information and news.</h3>
          </div>
        </div>
      </div>
      <div className="main_container">
        <div className="jumbotron" id="blogs">
          <div className="row align-items-center align-items-center">
            <div className="col-4 p-2">
              <img src="https://media.licdn.com/media/gcrc/dms/image/C5112AQGUi3sjwdwG2A/article-cover_image-shrink_720_1280/0?e=2127686400&v=beta&t=x8s5jyV_znGimV9BaH37mCnAkzmP7sCiDXOd5wsw1bM" alt=" Blog 1"></img>
            </div>
            <div className="col-7 ml-auto">
              <h3>Amazon EC2 (Elastic cloud compute) is a web based service that allows customers to run their applications and workloads on the virtual machines. Basically, an EC2 instance is a virtual machine on the cloud.</h3>
              <hr></hr>
              <a className="btn btn-dark" href="https://www.linkedin.com/pulse/aws-ec2-instance-types-explained-pradeep-papineni/" target="_blank" rel="noopener noreferrer">Read--></a>
            </div>
          </div>
        </div>
        <div className="jumbotron" id="blogs">
          <div className="row align-items-center">
            <div className="col-4">
              <img src="https://media.licdn.com/media/gcrc/dms/image/C5112AQGG-67-f4Jilg/article-cover_image-shrink_720_1280/0?e=2127686400&v=beta&t=qsOVJ_FJVOV6szHaSWFAbV49x5Bx5r00SMoRZbtX3p8" alt=" Blog 2"></img>
            </div>
            <div className="col-7 ml-auto">
              <h3 className="display-5">Infrastructure as Code (IaC) is also called as programmable infrastructure. It means writing code to provision infrastructure (Servers, Storage, Network & database etc) and deploying applications automatically. Really cool right, no more manual provisioning and deployments.
              </h3>
              <hr></hr>
              <a className="btn btn-dark" href="https://www.linkedin.com/pulse/infrastructure-code-iac-dummies-pradeep-papineni/" target="_blank" rel="noopener noreferrer">Read--></a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>)
  }
}

export default Blog;