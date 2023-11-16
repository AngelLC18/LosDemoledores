import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "mobilidadReducida", label: "Movilidad Reducida" },
  { value: "menuSinTacc", label: "Menu libre de gluten" },
  { value: "menuVegetariano", label: "Menu vegetariano" },
  { value: "menuDiabetico", label: "Menu apto diabetes" },
  { value: "prioridad", label: "Prioridad" },
  { value: "cambiadorBebes", label: "Cambiador para Bebes" },
];

const MultiSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectedOptionsChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  return (
    <Select
      isMulti
      options={options}
      value={selectedOptions}
      onChange={handleSelectedOptionsChange}
    />
  );
};

export default MultiSelect;
