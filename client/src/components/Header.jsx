import React, {Component} from "react";

// class Feed extends Component {
//   state = {
//     recentFeedPost: {
//       name: '',
//       url: ''
//     }
//   };
//
//   FetchDataFromRssFeed() {
//     var request = new XMLHttpRequest();
//     request.onreadystatechange = () => {
//       if (request.readyState === 4 && request.status === 200) {
//         var myObj = JSON.parse(request.responeText);
//         for (var i = 0; i < 1; i++) {
//           this.setState({
//             recentFeedPost: {
//               name: myObj.items[i].title,
//               url: myObj.items[i].link
//             }
//           });
//         }
//       }
//     }
//     request.open("GET", "https://aws.amazon.com/blogs/aws/feed/", true);
//     request.send();
//   }
//   componentDidMount() {
//
//     this.FetchDataFromRssFeed()
//
//   }
//   render() {
//     return (<div className="align-left">
//       The Feed:
//       <a target="_blank" href={this.state.recentFeedPost.url}>{this.state.recentFeedPost.name}</a>
//     </div>)
//   }
// }

class Header extends Component {
  render() {
    return (<div className="page_header bg-dark text-white">
      <span className="p-2">
        <i className="fa fa-phone  p-1" aria-hidden="true"></i>+1(347)-891-5103</span>
      <span className="p-2">
        <i className="fa fa-envelope-o  p-1" aria-hidden="true"></i>contact.us@virtuetechinc.com</span>
    </div>)
  }
}

export default Header;
