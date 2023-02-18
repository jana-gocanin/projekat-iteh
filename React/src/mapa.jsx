import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, Polygon, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '700px',
  height: '400px',



};

const center = {
  lat: 44.781037,
  lng: 20.5085
};

const polygonCoords = [
  { lat: 44.65109, lng: 20.18908 },
  { lat: 44.89997, lng: 20.15397 },
  { lat: 44.83136, lng: 20.39767 },
  { lat: 44.8787385, lng: 20.4667137 },
  { lat: 44.75795, lng: 20.68114 },
  { lat: 44.57557, lng: 20.46567 }
];

function Mapa() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDUz5ANZlTOSAHgvh4Pgv9xd9y6xa-PQUM"
  });

  const [map, setMap] = useState(null);
  const [markerActive, setMarkerActive] = useState(false);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleMarkerClick = () => {
    if (map) {
      map.setZoom(20);
      setMarkerActive(true);
    }
  };

  const handleInfoWindowClose = () => {
    setMarkerActive(false);
  };

  return isLoaded ? (
    <GoogleMap id="mapa"
      mapContainerStyle={containerStyle}
      center={center}
      zoom={20}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} title="Belgrade" onClick={handleMarkerClick}>
        {markerActive && (
          <InfoWindow onCloseClick={handleInfoWindowClose}>
            <div>
              <p>Dobrodosli u nas azil!</p>
            </div>
          </InfoWindow>
        )}
      </Marker>
      <Polygon
        paths={polygonCoords}
        options={{
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "FF9189",
          fillOpacity: 0.15
        }}
      />
    </GoogleMap>
  ) : <></>;
}

export default Mapa;