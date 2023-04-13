import React from "react";
import { GoogleMap, LoadScript, Marker,  } from "@react-google-maps/api";

interface MapProps {
  address: string;
}

const Map: React.FC<MapProps> = ({ address }) => {
  const [position, setPosition] = React.useState<google.maps.LatLngLiteral | undefined>(undefined);

  React.useEffect(() => {
    const geocoder = new google.maps.Geocoder()
     geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results && results[0]) {
        setPosition(results[0].geometry.location.toJSON());
      } else {
        console.error(`Geocode error: ${status}`);
      }
    });
  }, [address]);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
      {position ? (
        <GoogleMap mapContainerStyle={{ height: "400px", width: "400px" }} zoom={15} center={position}>
          <Marker position={position} />
        </GoogleMap>
      ) : (
        <div>Loading...</div>
      )}
    </LoadScript>
  );
};

export default Map;