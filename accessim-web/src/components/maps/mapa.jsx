import React from 'react';
import Mapa from './maps';

const App = () => {
  const ubicacion = { lat: 37.7749, lng: -122.4194 }; 

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, border: '1px solid #ccc', padding: '20px' }}>
        <h1>Contenido en el Lado Izquierdo</h1>
        
      </div>
      <div style={{ flex: 1, position: 'relative' }}>
        <Mapa ubicacion={ubicacion} />
      </div>
    </div>
  );
};

export default App;
