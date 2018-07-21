import React from "react";
import axios from 'axios';
export default class Form extends React.Component {
  state = {
    fullName: "",
    email: "",
    message: ""
  };

  handleOnChange = (e) => {
    switch (e.target.id.toString()) {
      case "email":
        this.setState({email: e.target.value})
        break;
      case "fullName":
        this.setState({fullName: e.target.value})
        break;
      default:
        this.setState({message: e.target.value})
    }
  };

  onSubmit = () => {
    const {email, fullName, message} = this.state;
    const data = {
      email,
      fullName,
      message
    }
    axios.post('/api/form/', data).then(() => {
      this.setState({fullName: "", email: "", message: ""});
      console.log("success");
    }, () => {
      this.setState({fullName: "", email: "", message: ""});
      console.log("failure");
    })
  };

  render() {
    return (<div>
      <div className="contact-us-form">
        <h4>Fill Out The "Form" Below or Give us "<span>
            <i className="fa fa-phone  p-1" aria-hidden="true"></i>
          </span>Call" or "<span>
            <i className="fa fa-envelope-o  p-1" aria-hidden="true"></i>
          </span>Email" us...</h4>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" value={this.state.email} onChange={this.handleOnChange} aria-describedby="emailHelp" placeholder="You'r email id: example@something.com" required="required"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" className="form-control" id="fullName" value={this.state.fullName} onChange={this.handleOnChange} placeholder="You'r Full Name" required="required"/>
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message to us:</label>
          <textarea className="form-control" id="message" value={this.state.message} onChange={this.handleOnChange} rows="3"></textarea>
        </div>
        <button onClick={this.onSubmit} className="btn btn-dark">Send</button>
        <span className="p-2">
          <i className="fa fa-phone  p-1" aria-hidden="true"></i>+1(347)-891-5103</span>
        <span className="p-2">
          <i className="fa fa-envelope-o  p-1" aria-hidden="true"></i>contact.us@virtuetechinc.com</span>
      </div>
    </div>);
  }
}

// method="post" action="mailto:sree.ayyala@virtuetechinc.com"