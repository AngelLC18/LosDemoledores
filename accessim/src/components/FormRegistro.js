import React from "react";
import Checklist from "./Checklist";
import InputString from "./InputString";
import Select from "./Select";
import MasInfo from "./MasInfo";
import Footer from "./Footer";

function FormRegistro() {
    return (
      <div className ='bg-white border-2 rounded-xl flex justify-center flex-col flex-wrap h-[600px] w-[500px] p-4 gap-4'> 
        <InputString placeholder="Nombre del Servicio" />        
        <InputString placeholder="Horario" />
        <InputString placeholder="Ubicación" />
        <div>
          <Select disabledOption="Seleccione su rubro"
          value1="opcion1" labelSelect1="Opcion 1"
          value2="opcion2" labelSelect2="Opcion 2"
          value3="opcion3" labelSelect3="Opcion 3" />
        </div>
        <div>
          <Select disabledOption="Seleccione su area" value1="opcion1" labelSelect1="Opcion 1"
          value2="opcion2" labelSelect2="Opcion 2"
          value3="opcion3" labelSelect3="Opcion 3" />
        </div>
       <div className="form-control flex flex-row">
        <Checklist span="Remember me"/>
       </div>
       <MasInfo placeholder="Agregue su información adicional aqui"/>
      <div className="footer">
        <Footer />
      </div>
      </div>  
    
    );
  }
  
export default FormRegistro;

