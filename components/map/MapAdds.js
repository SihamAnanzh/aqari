import React, { Component } from 'react';
import  GoogleMapReact from 'google-map-react';
 

class SimpleMap extends Component {

  static defaultProps = {
    center: {
      lat: 29.266666,
      lng: 47.933334
    },
    zoom: 11
  };



  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '202px', width: '911px'}}>
        <GoogleMapReact 
          bootstrapURLKeys={{ key:'AIzaSyCa-awV5uo5Z0EC6w4FIvxvsWFDH0N1nh8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          
        >
   
      
        </GoogleMapReact>
        
      </div>
    );
  }
}

export default SimpleMap;

