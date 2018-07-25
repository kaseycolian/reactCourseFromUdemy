import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


class MapComponent extends Component {
	//removing useless constructor to avoid warnings while compiling & in console
	// constructor(props) {
	// 	super(props);
	// }
	render () {

		const MyMapComponent = withScriptjs(withGoogleMap((props) =>
		  <GoogleMap
		    defaultZoom={8}
		    defaultCenter={{ lat: 39.9612, lng: -82.9988 }}
		  >
		  	{props.isMarkerShown && <Marker position={{ lat: 39.9612, lng: -82.9988 }} />}
		  </GoogleMap>
		))
		return (
			<div style = {{margin:'10rem', marginTop: '5rem'}} >
			<MyMapComponent
			  isMarkerShown
			  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
			  loadingElement={<div style={{ height: `100%` }} />}
			  containerElement={<div style={{ height: `400px` }} />}
			  mapElement={<div style={{ height: `100%` }} />}
			/>
			</div>
		)
	}
}

export default MapComponent