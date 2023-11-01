import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class GoogleMapPopup extends Component {
    render() {
      const mapStyles = {
        width: "300px",
        height: "200px",
      };