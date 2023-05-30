import React from 'react';
import '../styles/Button.css';

function Button ({texto, clickear}){
  return(
    <button onClick={clickear}>
      
      {texto}
    </button>
  );
}
export default Button;