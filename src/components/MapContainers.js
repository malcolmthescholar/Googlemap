import React from 'react'
import {GoogleMap,LoadScript,Marker} from "@react-google-maps/api"

// Google Map : it allows us to render any googlemap on any react app

//LoadScript : loads the  Google Map Api Script

//Marker : identifies a location on a map

const MapContainers = () => {
      const item={
        name:"gomycode",
        location:{
          lat:6.499244530819389,
          lng:3.37876526706314
        }
      }
      
      const mapStyles={
        height:"400px",
        width:"100%"
      }
      const defaultCenter={
        lat:6.499244530819389,
        lng:3.37876526706314
      }









  return (
    <div>
        {/* <h6>every thing is in google map</h6> */}
        <LoadScript googleMapsApiKey='AIzaSyC-9HBtGH2Tn5omz6Y4g9B29Jg5EVVx2xE'>
          <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
            <Marker key={item.name} position={item.location} />

          </GoogleMap>
        </LoadScript>
    </div>
  )
}

export default MapContainers
