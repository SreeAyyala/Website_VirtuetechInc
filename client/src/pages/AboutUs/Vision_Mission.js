import React, {Component, Fragment} from "react";

class Vision extends Component {
  render() {
    return (<Fragment>
      <div className="container vmc">
        <div className="row">
          <div className="col-lg-4">
            <img className="rounded-circle" src="/icons_png/view-1.png" alt="Generic placeholder" width="150" height="150"/>
            <h3>Vision</h3>
            <p>To be a trusted resource for creating simple and scalable solutions around complex technology business problems partnering with our clients to accomplish their goals.</p>
          </div>
          <div className="col-lg-4">
            <img className="rounded-circle" src="/icons_png/settings-2.png" alt="Generic placeholder" width="150" height="150"/>
            <h3>Mission</h3>
            <p>To help companies in need of IT/business process improvement or automation making them more efficient and competitive by providing the latest innovative solutions and profound technical consultants.</p>
          </div>
          <div className="col-lg-4">
            <img className="rounded-circle" src="/icons_png/share-2.png" alt="Generic placeholder" width="150" height="150"/>
            <h3>Core Values</h3>
            <p>Our people make us different—energetic about supporting and challenging our clients in equal measure. We're passionate about making a measurable impact in all we do.</p>
          </div>
        </div>
      </div>
    </Fragment>)
  }
}

export default Vision;

/* <img className="w-100 " src="./assets/img1.jpg" alt="First Slide"></img>
<div className="main_container">

  <div className="row">
    <div className="card_container">
      <div className="shadow" id="card">
        <div className="front face " id="vision_card">
          <img src="./assets/vision.png " alt="Vision"></img>
        </div>
        <div className="back face center">
          <h3>Vision</h3>
          <h5>To be a trusted resource for creating simple and scalable solutions around complex technology business problems partnering with our clients to accomplish their goals.</h5>
        </div>
      </div>
    </div>
    <div className="card_container">
      <div className="shadow" id="card">
        <div className="front face " id="vision_card">
          <img src="./assets/mission.png " alt="Mission"></img>
        </div>
        <div className="back face center">
          <h3>Mission</h3>
          <h5>To help companies in need of IT/business process improvement or automation making them more efficient and competitive by providing the latest innovative solutions and profound technical consultants.</h5>
        </div>
      </div>
    </div>
  </div>
  <div className="card_container">
    <div className="shadow" id="card">
      <div className="front face " id="values_card">
        <img src="./assets/values.png " alt="Core-Values"></img>
      </div>
      <div className="back face center">
        <h1>Core-Values</h1>
        <ul>
          <li>
            <h3>Integrity</h3>
          </li>
          <li>
            <h3>Quality</h3>
          </li>
          <li>
            <h3>Collaboration</h3>
          </li>
          <li>
            <h3>Knowledge</h3>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div> */
