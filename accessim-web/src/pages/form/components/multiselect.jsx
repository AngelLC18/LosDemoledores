import { collection } from "firebase/firestore/lite";
import { useState } from "react";
import Select from "react-select";
import { FirebaseDB } from "../../../services/firebaseConfig";
import { addDoc } from "firebase/firestore/lite";
import "../../form/Form_rubro.css";

const options = [
  { value: "mobilidadReducida", label: "Movilidad Reducida" },
  { value: "menuSinTacc", label: "Menu libre de gluten" },
  { value: "menuVegetariano", label: "Menu vegetariano" },
  { value: "menuDiabetico", label: "Menu apto diabetes" },
  { value: "prioridad", label: "Prioridad" },
  { value: "cambiadorBebes", label: "Cambiador para Bebes" },
];

function MultiSelect() {
  const [selectedOptions, setSelectedOptions] = useState("");
  const [error, setError] = useState(null);

  const handleSelectedOptionsChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  const handleSelectedOptionsSubmit = async (event) => {
    event.preventDefault();

    if (!selectedOptions.trim()) {
      setError("Debe ingresar al menos una accesibilidad");
      return;
    }

    try {
      await addDoc(collection(FirebaseDB, "locales"), {
        selectedOptions,
      });

      setSelectedOptions("");

      alert("Registro realizado con éxito!");
    } catch (error) {
      setError("Error al guardar los datos: " + error.message);
    }
  };

  return (
    <div className="select" onSubmit={handleSelectedOptionsSubmit}>
      <label className="label multiselect text-black ">
        Selccione las habilidades que ofrece su local:
        <Select
          isMulti
          options={options}
          value={selectedOptions}
          onChange={handleSelectedOptionsChange}
        />
      </label>
    </div>
  );
}

export default MultiSelect;
