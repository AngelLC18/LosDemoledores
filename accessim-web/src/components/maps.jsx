import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Mapa = ({ ubicacion }) => {
  const mapStyles = {
    height: '100%',
    width: '100%',
  };

  return (
    <LoadScript
      googleMapsApiKey="TU_API_KEY_DE_GOOGLE_MAPS"
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={ubicacion}
      >
        <Marker position={ubicacion} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Mapa;
