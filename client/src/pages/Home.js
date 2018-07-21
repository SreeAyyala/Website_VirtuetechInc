import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class Home extends Component {
  render() {

    return (<Fragment>
      <div id="myCarousel" className="carousel slide bg-dark" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img className="first-slide" src="./assets/slide1.jpg" alt="First slide"/>
            <div className="container">
              <div className="carousel-caption d-none d-md-block text-left">
                <h1>Our Imagination Our Power</h1>
                <p>Coustom Solutions to Uinique Problems</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="second-slide" src="/" alt="Second slide"/>
            <div className="container">
              <div className="carousel-caption d-none d-md-block">
                <h1>Another example headline.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="third-slide" src="/" alt="Third slide"/>
            <div className="container">
              <div className="carousel-caption d-none d-md-block text-right">
                <h1>One more for good measure.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="Home_main_container">
        <div className="info_div p-4">
          <div className="row p-3">
            <div className="col-lg-4 p-2">
              <img className="rounded-circle" src="/icons_png/vector.png" alt="Generic placeholder" width="150" height="150"/>
              <h3 className="p-2">SYNOPSIS</h3>
              <p>We are a global consulting firm and Oracle Gold Partner that specializes in process optimization integration, upgrades and business transformation.</p>
            </div>
            <div className="col-lg-4 p-2">
              <img className="rounded-circle" src="/icons_png/tabs.png" alt="Generic placeholder" width="150" height="150"/>
              <h3 className="p-2">WHAT WE DO</h3>
              <p>Headquartered in Bellevue, WA, with offshore COE’s in Visakhapatnam, India, VirtueTech is an industry leader in systems consulting and process improvements.</p>
            </div>
            <div className="col-lg-4 p-2">
              <img className="rounded-circle" src="/icons_png/task.png" alt="Generic placeholder" width="150" height="150"/>
              <h3 className="p-2">WHO WE ARE</h3>
              <p>Our goal is to help businesses define, refine and realize a modern vision for their company. We accomplish in this by helping you rapidly evaluate and deploy technology that enables state of the art best practices.</p>
            </div>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-md-6 p-2" id="home_div_grey">
            <div className="row">
              <div className="col-4 text-center">
                <img src="./icons_2_png/cloud-computing.png" alt="database" width="225px" height="225px"></img>
              </div>
              <div className="col-8">
                <h2 className="p-2">Cloud Services</h2>
                <p>VirtueTech,Inc is an information technology (IT) Services Company founded in 2010 on the simple premise that clients come first. We have in depth knowledge...</p>
                <Link className="btn btn-danger" to="/Cloud_Services">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-2" id="home_div_red">
            <div className="row p-2">
              <div className="col-8">
                <h2 className="p-2">Oracle Services</h2>
                <p>Technology is constantly changing. To increase your profits and grow your business along with keeping up to speed with your customer needs one needs technology upgrades...</p>
                <Link className="btn btn-outline-light" to="/Oracle_Services">Learn More</Link>
              </div>
              <div className="col-4 text-center">
                <img src="./icons_2_png/databases.png" alt="database" width="225px" height="225px"></img>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-2" id="home_div_red">
            <div className="row p-2">
              <div className="col-4 text-center">
                <img src="./icons_2_png/infrastructure.png" alt="database" width="225px" height="225px"></img>
              </div>
              <div className="col-8">
                <h2 className="p-2">Infrastructure Services</h2>
                <p>Technology is constantly changing. To increase your profits and grow your business along with keeping up to speed with your customer needs one needs technology upgrades...</p>
                <Link className="btn btn-outline-light" to="/Infrastructure_Services">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-2" id="home_div_grey">
            <div className="row p-2">
              <div className="col-8">
                <h2 className="p-2">Professional Services</h2>
                <p>Technology is constantly changing. To increase your profits and grow your business along with keeping up to speed with your customer needs one needs technology upgrades...</p>
                <Link className="btn btn-danger" to="/Professional_Services">Learn More</Link>
              </div>
              <div className="col-4 text-center">
                <img src="./icons_2_png/network.png" alt="database" width="225px" height="225px"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 bg-dark text-white">
        <h4 className="text-center">Our Partners</h4>
      </div>
      <div className="carousel"></div>
      {/* <div className="insights row p-3">
          <div className="col">
            <a className="btn btn-outline-dark" id="btn-light" href="./CaseStudies">
              <i className="fa fa-file fa-4x" aria-hidden="true"></i>
              <h3>Case Studies</h3>
            </a>

          </div>
          <div className="col">
            <a className="btn btn-outline-dark" id="btn-light" href="./WhiteBoards">
              <i className="fa fa-window-restore fa-4x" aria-hidden="true"></i>
              <h3>White Boards</h3>
            </a>
          </div>
          <div className="col">
            <a className="btn btn-outline-dark" id="btn-light" href="./Videos">
              <i className="fa fa-play-circle-o fa-4x" aria-hidden="true"></i>
              <h3>Videos</h3>
            </a>
          </div>
          <div className="col">
            <a className="btn btn-outline-dark" id="btn-light" href="./Blog">
              <i className="fa fa-comments fa-4x" aria-hidden="true"></i>
              <h3>Blog</h3>
            </a>
          </div>
        </div> */
      }
    </Fragment>)
  }

}

export default Home;
