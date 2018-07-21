import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/Styles.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (<Fragment>
      <Header/>
      <Navbar/>
      <Main/>
      <Footer/>
    </Fragment>);
  }
}

export default App;
