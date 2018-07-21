import React, {Component, Fragment} from "react";
import Form from './Form';
import GMap from './GMap';

class ContactUs extends Component {

  render() {
    return (<Fragment>
      <div className="jumbotron bg-dark text-white" id="ContactUsHeader_jumbotron">
        <div className="row d-flex flex-row justify-content-start">
          <div className="col-7 p-4">
            <h3 className="display-4">Reach-out To Us And Let Us Know How We Can Help?</h3>
          </div>
        </div>
      </div>
      <div className="main_container">
        <div className="row p-5">
          <div className="col-6">
            <Form/>
          </div>
          <div className="col-6">
            <GMap/>
          </div>
        </div>

      </div>
    </Fragment>);
  }
}

export default ContactUs;
