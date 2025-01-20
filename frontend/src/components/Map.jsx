import React from 'react';
import GoogleMapReact from 'google-map-react';


const Marker = ({ text }) => (
  <div className="bg-white border border-gray-300 shadow-md p-2 rounded-lg text-center" style={{ width: '100px' }}>
    <p className="text-black font-bold text-sm">{text}</p>
  </div>
);


const Map = ({ center, zoom, markerText }) => {
  return(
    <div className="h-64 w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBapYV4CBMa93szwglNW4XAsIxsTSghfNE" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker lat={center.lat} lng={center.lng} text={markerText} />
      </GoogleMapReact>
    </div>
  )
}

export default Map
