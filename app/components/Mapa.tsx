import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface MapProps {
  position?: google.maps.LatLngLiteral;
}

const Map: React.FC<MapProps> = ({ position }) => {
  const defaultCenter = { lat: 37.7749, lng: -122.4194 }; // San Francisco
  const mapPosition = position ?? defaultCenter; // Use the given position, or default to San Francisco

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
      <GoogleMap
        mapContainerStyle={{ height: "400px", width: "100%" }}
        zoom={15}
        center={mapPosition}
      >
        <Marker position={mapPosition} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;

// import React from "react";
// import { GoogleMap, LoadScript, Marker,  } from "@react-google-maps/api";

// interface MapProps {
//   address: string;
// }

// const Map: React.FC<MapProps> = ({ address }) => {
//   const [position, setPosition] = React.useState<google.maps.LatLngLiteral | undefined>(undefined); 
//   React.useEffect(() => {
//     const geocoder = new google.maps.Geocoder()
//     console.log(google.maps)
//      geocoder.geocode({ address }, (results, status) => {
//       if (status === "OK" && results && results[0]) {
//         setPosition(results[0].geometry.location.toJSON());
//       } else {
//         console.error(`Geocode error: ${status}`);
//       }
//     });
//   }, [address]);

//   return (
//     <LoadScript googleMapsApiKey={'AIzaSyBkEyCcixFvp0P3swFcWBBy8qjC09yRneY'}>
//       {position ? (
//         <GoogleMap mapContainerStyle={{ height: "400px", width: "400px" }} zoom={15} center={position}>
//           <Marker position={position} />
//         </GoogleMap>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </LoadScript>
//   );
// };

// export default Map;