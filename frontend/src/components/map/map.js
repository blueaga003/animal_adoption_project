import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { keys } from '../../secret_keys'; 
// import mapStyle from './mapStyle'; // add a mapStyle
// const mapStyle = mapStyle.styleArray;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 37.77495,
            lng: -122.4194 

        },
        zoom: 14
    };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '700px', width: '1000px'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: keys.google_maps_key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          containerElement={ <div style={ { height: "100%" } } /> } 
        >
        < /GoogleMapReact>
      </div>
    );
  }
}

export default Map;
