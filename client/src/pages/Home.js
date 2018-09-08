import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
class Home extends Component {
  render() {

    return (<Fragment>
      <div className="jumbotron bg-dark" id="home_jumbotron1">
        <div className="row p-3 text-white">
          <h1>We Bring The CLoud To Your Reach</h1>
          <h4></h4>
        </div>
      </div>
      <div className="sub_container">
        <div className="row">
          <div className="col-3">
            <i className="fa fa-cloud fa-5x" aria-hidden="true"></i>
            <h2>AWS-Cloud Services</h2>
            <p>Aws is currently the world’s largest cloud provider in infrastructure-as-a-service(IaaS) model. Choosing the appropriate model requires careful planning and understanding of the drivers, benefits…</p>
            <Link className="btn btn-dark" to="/Cloud_services/">Learn More</Link>
          </div>
          <div className="col-3">
            <i className="fa fa-cogs fa-5x" aria-hidden="true"></i>
            <h2>ERP Migration Services</h2>
            <p>VT consultants are experts in Oracle EBS suite and develop strategic roadmaps and advance their journey to the cloud from any point: New cloud deployments, Legacy environments, and Hybrid implementations….</p>
            <Link className="btn btn-dark" to="/Oracle_Services/">Learn More</Link>
          </div>
          <div className="col-3">
            <i className="fa fa-bar-chart fa-5x" aria-hidden="true"></i>
            <h2>Infrastructure Services</h2>
            <p>Comprehensive training helps your organization innovate faster, develop better solutions for your customers and accomplish your objectives more efficiently. We offer learning paths….</p>
            <Link className="btn btn-dark" to="/Infrastructure_Services/">Learn More</Link>
          </div>
          <div className="col-3">
            <i className="fa fa-id-badge fa-5x" aria-hidden="true"></i>
            <h2>Professional Services</h2>
            <p>The key to a successful implementation starts with a robust plan. We’ll link your business objectives to a set of solution requirements and then we can tailor our engagement approach to best meet…</p>
            <Link className="btn btn-dark" to="/Professional_Services/">Learn More</Link>
          </div>
        </div>
      </div>

      <div id="myCarousel" className="carousel slide bg-dark" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            {/* <img className="first-slide" src="/" alt="First slide"/> */}
            <div className="container">
              <div className="carousel-caption d-none d-md-block text-left">
                <h1>We at Virtue Tech Believe
                </h1>
                <p>“Customer service is not a department, it’s everyone’s job.”</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            {/* <img className="second-slide" src="/" alt="Second slide"/> */}
            <div className="container">
              <div className="carousel-caption d-none d-md-block">
                <h1>Our Imagination Our Power</h1>
                <p>Custom Solutions to Unique Problems.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            {/* <img className="third-slide" src="/" alt="Third slide"/> */}
            <div className="container">
              <div className="carousel-caption d-none d-md-block text-right">
                <h1>Listening Is A Great Skill That We Possess</h1>
                <p>On Time Within Budget We Deliver</p>
              </div>
            </div>
          </div>
        </div>
        {/* <Link className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </Link>
          <Link className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </Link> */
        }
      </div>
    </Fragment>)
  }

}

export default Home;
