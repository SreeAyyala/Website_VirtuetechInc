import React, {Component} from "react";

class Team extends Component {
  render() {
    return (<div className="container team">
      <h3>Our Team:</h3>
      <hr/>
      <div className="row p-2">
        <div className="col-md-7 my-auto">
          <h3>Padma Ayala
            <span className="text-muted">-CEO & President</span>
          </h3>
          <p className="lead">"The future depends on what we do in the present…Mahatma Gandhi"</p>
          <p>An Engineer by profession but a poet at heart has love for teaching. She believes that “In a gentle way, you can shake the world”.</p>
          <p>Her passion is to ignite the young minds towards the technology revolution and enjoy watching their empowerment as the best way to find yourself is to lose yourself in the service of others.
          </p>
        </div>
        <div className="col-md-5">
          <img src="./assets/Padma.Ayala.jpg" alt="PadmaAyala" width="350px" height="450px"/>
        </div>
      </div>
      <hr className="p-2"/>
      <div className="row ">
        <div className="col-md-7 my-auto">
          <h3 >Sree Ayyala
            <span className="text-muted">-Front-End Developer
            </span>
          </h3>
          <p className="lead">“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present...Bil Keane”</p>
        </div>
        <div className="col-md-5">
          <img src="./assets/Sree.Ayyala.jpg" alt="Sree Ayyala" width="350px" height="450px"/>
        </div>
      </div>
      <hr className="p-2"/>
    </div>)
  }
}

export default Team;
