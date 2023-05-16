import React from "react";
import InputString from "./components/InputString";
import Select from "./components/Select";
import Checklist from "./components/Checklist";
import Textarea from "./components/InputText";
//import './App.css';

function App() {
  
  return (
    <React.Fragment>{/*esta etiqueta es invisible*/}
      <InputString />
      <Select />
      <Checklist />
      <Textarea />
    </React.Fragment>  
  );
}

export default App;
