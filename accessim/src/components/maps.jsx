import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class GoogleMapPopup extends Component {
    render() {
      const mapStyles = {
        width: "300px",
        height: "200px",
      };
      return (
        <div className="map">
          <Map
            google={this.props.google}
            zoom={14} 
            style={mapStyles}
            initialCenter={{
              lat: 37.7749,
              lng: -122.4194, 
            }}
          />
        </div>
      );
    }
  }export default GoogleApiWrapper({
    apiKey: "necesitamos una api key", 
  })(GoogleMapPopup);
