/*import { useState } from "react";
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
*/

import { useState } from "react";
import Select from "react-select";
import firebase from "firebase/app";
import "firebase/firestore";

// Configura tu objeto de configuración de Firebase aquí
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID",
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Obtén una referencia a la base de datos de Firestore
const db = firebase.firestore();

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

  const handleSelectedOptionsChange = async (selectedOptions) => {
    setSelectedOptions(selectedOptions);

    // Convierte los datos seleccionados en un formato que desees almacenar en Firestore
    const dataToStore = selectedOptions.map((option) => ({
      value: option.value,
      label: option.label,
    }));

    try {
      // Almacena los datos en Firestore
      await db.collection("tuColeccion").doc("tuDocumento").set({
        selectedOptions: dataToStore,
      });
      console.log("Datos almacenados correctamente en Firebase");
    } catch (error) {
      console.error("Error al almacenar datos en Firebase:", error);
    }
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
