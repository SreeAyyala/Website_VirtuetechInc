import React from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class GMap extends React.Component {

  render() {
    return (<Map google={this.props.google} zoom={15} className={"google-map"} initialCenter={{
        lat: 47.629082,
        lng: -122.129907
      }}>

      <Marker title={'VirtueTechInc 156th Avenue N.E,Suite 176 Office Number 246 Bellevue, WA-98007'} name={'VirtueTechInc'} position={{
          lat: 47.629082,
          lng: -122.129907
        }}/>

      <InfoWindow onClose={this.onInfoWindowClose}>
        <div>
          <h1>VirtueTechInc</h1>
        </div>
      </InfoWindow>
    </Map>);
  }
}

export default GoogleApiWrapper({apiKey: "AIzaSyAvufTTZtlwfn0QgQ-3h5ADPLpjcgVS-N8"})(GMap)
