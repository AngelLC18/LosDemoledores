import { useState } from "react";
import { collection, addDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

function Form_rubro() {
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState(null);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!nombre.trim()) {
      setError("El nombre no puede estar vacío");
      return;
    }

    try {
      await addDoc(collection(FirebaseDB, "locales"), { nombre });

      setNombre("");
      setError(null);
      alert("Nombre guardado exitosamente");
    } catch (error) {
      setError("Error al guardar el nombre: " + error.message);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={handleNombreChange}
        />
      </label>
      {error && <p>{error}</p>}
      <button type="submit">Guardar</button>
    </form>
  );
}

export default Form_rubro;
