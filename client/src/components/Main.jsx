import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/AboutUs/';
import CloudServices from '../pages/Services/Cloud_Services/';
import InfrastructureServices from '../pages/Services/Infrastructure_Services/';
import OracleServices from '../pages/Services/Oracle_Services/';
import OIU from '../pages/Services/Oracle_Services/OIU.js';
import OC from '../pages/Services/Oracle_Services/OC.js';
import OCS from '../pages/Services/Oracle_Services/OCS.js';
import OT from '../pages/Services/Oracle_Services/OT.js';
import ProfessionalServices from '../pages/Services/Professional_Services/';
import Trainings from '../pages/Trainings/';
import ContactUs from '../pages/ContactUs/';
// import Blog from '../pages/Blog';

class Main extends React.Component {
  // state = {
  //   path: ''
  // }
  //
  // headerFromPath = () => {
  //   const locationString = window.location.pathname.split('/')
  //   return locationString[1]
  // }

  render() {
    return (<main className="container-main">
      {/* <div className="page-header w-100">
        <h2>{this.headerFromPath()}</h2>
      </div> */
      }
      <div id="main-content" className="bg-white">
        <Switch>
          <Route exact={true} path='/' component={Home}/>
          <Route path='/About' component={About}/>
          <Route path='/Infrastructure_Services' component={InfrastructureServices}/>
          <Route path='/Professional_Services' component={ProfessionalServices}/>
          <Route path='/Oracle_Services/OIU' component={OIU}/>
          <Route path='/Oracle_Services/OT' component={OT}/>
          <Route path='/Oracle_Services/OC' component={OC}/>
          <Route path='/Oracle_Services/OCS' component={OCS}/>
          <Route path='/Oracle_Services' component={OracleServices}/>
          <Route path='/Cloud_Services' component={CloudServices}/>
          <Route path='/Trainings' component={Trainings}/>
          <Route path='/ContactUs' component={ContactUs}/> {/* <Route path='/Blog' component={Blog}/> */}

        </Switch>
      </div>
    </main>)
  }
}

export default Main;
