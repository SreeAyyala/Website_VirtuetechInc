import React, {Component, Fragment} from "react";

class Trainings extends Component {
  render() {
    return (<Fragment>
      <div className="jumbotron bg-dark text-white" id="TrainingHeader_jumbotron">
        <div className="col">
          <h2 className="display-4">Why To Choose VirtueTech Academy?</h2>
          <h5>Keeping The Students In Mind, We Help Benifit & Support Them In Every Step Of Thier Journey In Finding A New Career.
          </h5>
        </div>
      </div>
      <div className="main_container" id="trainings">
        <div className="row p-2">
          <div className="col d-flex justify-content-end p-2">
            <img src="./assets/trainings/image1.png" alt="course_details" width="450px" height="450px" id="training_image_left"></img>
          </div>
          <div className="col p-3 my-auto text-left">
            <h4>At VirtueTech Students Benifit From Every Aspect In Their Journey Of The Education Program
            </h4>

            <p>Positive Culture Fit</p>
            <p>Challenging, Enjoyable Work Efforts</p>
            <p>New, Secure Career Along With Continued Career Growth</p>

          </div>
        </div>
        <hr className="p-2"/>
        <div className="row">
          <div className="col p-2 my-auto text-right">
            <h4>CURRICULUM</h4>
            <p className="lead">An Iintensive 10 Week Program With Dedicated Timpnes</p>

            <p>Constructed By Developers,To Meet Latest Technological Needs</p>
            <p>Taught By Professional Developers</p>
            <p>Evolves To Stay Ahead</p>

          </div>
          <div className="col d-flex justify-content-start">
            <img src="./assets/trainings/image2.jpg" alt="course_details" width="450px" height="450px" id="training_image_right"></img>
          </div>
        </div>
        <hr className="p-2"/>
        <div className="row p-2">
          <div className="col d-flex justify-content-end">
            <img src="./assets/trainings/image3.jpeg" alt="course_details" width="450px" height="450px" id="training_image_left"></img>
          </div>
          <div className="col p-2 my-auto text-left">
            <h4>CAREER ADVANCEMENT & SUPPORT</h4>

            <p>Certification - Get prepared for globally recognized certifications</p>
            <p>Placement Assistance - Dedicated Placement Cell</p>
            <p>Customer Support & Help Desk.</p>

          </div>
        </div>
        <hr className="p-2"/>
        <div className="row">
          <div>
            <h2>Our SkillSet & Tools</h2>
            <div className="row p-3 text-center">
              <div className="col-xs-12 col-sm-6 col-md-4 p-3">
                <div>
                  <i className="fa fa-code fa-5x fa-fw" id="fa_code"></i>
                  <h4 className="p-2">
                    Languages & Frameworks
                  </h4>
                </div>
                <p className="p-2">
                  Make apppcations that take care of issues utipzing bleeding edge innovation and programming that our Curriculum Development Team has reviewed.

                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 p-3">
                <div>
                  <i className="fa fa-pencil-square-o fa-5x fa-fw"></i>
                  <h4 className="p-2">
                    Development-Team Experience
                  </h4>
                </div>
                <p className="p-2">
                  Hiring managers value peer survey and strong relational abipties sharpened while working with others to make inventive arrangements.

                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 p-3">
                <div>
                  <i className="fa fa-puzzle-piece fa-5x fa-fw" id="fa_puzzle"></i>
                  <h4 className="p-2">
                    Presentation Skills
                  </h4>
                </div>
                <p className="p-2">
                  Polish your presention acumen impart thoughts to your group and others. Iterate to optimize your products.

                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 p-3">
                <div>
                  <i className="fa fa-th-large fa-5x fa-fw"></i>
                  <h4 className="p-2">
                    Design & Critical Thinking
                  </h4>
                </div>
                <p className="p-2">
                  Learn the technical skills to create static sites and dynamic web apps, as well as techniques to learn new programming languages quickly and effectively.

                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 p-3">
                <div>
                  <i className="fa fa-tasks fa-5x fa-fw" id="fa_tasks"></i>
                  <h4 className="p-2">
                    Technological Sophistication
                  </h4>
                  <p className="p-2">
                    Learn the technical skills to create static sites and dynamic web apps, as well as techniques to learn new programming languages quickly and effectively.

                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 p-3">
                <div>
                  <i className="fa fa-window-restore fa-5x fa-fw"></i>
                  <h4 className="p-2">
                    Build Processes
                  </h4>
                </div>
                <p className="p-2">
                  Git, collaboration/version control software, and Agile methodology; widely accepted processes professional teams use to create apps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Fragment>)
  }
}

export default Trainings;
