/*import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/NavBar";

const Form_rubro = () => {
  return (
    const = 
    <div className="flex flex-col items-center justify-center min-h-screen mt-20 dark:bg-gray-800">
      <header>
        <Navbar />
      </header>
      <main>
        <input type="text"></input>
      </main>
      <Footer />
    </div>
  );
};

export default Form_rubro;
*/

/*
getFirestore;
import { getFirestore } from "firebase/firestore/lite";
import { useState } from "react";

function Form_rubro() {
  const [nombre, setNombre] = useState("");

  // Manejar cambios en el input de nombre
  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  // Manejar el envío del formulario
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Guardar el nombre en la base de datos de Firebase
      const db = getFirestore();
      await db.collection("locales").add({ nombre });

      // Limpiar el estado del nombre después de guardar en la base de datos
      setNombre("");
      alert("Nombre guardado exitosamente");
    } catch (error) {
      console.error("Error al guardar el nombre:", error.message);
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
      <button type="submit">Guardar</button>
    </form>
  );
}
export default Form_rubro;
*/

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../services/firebaseConfig";

function Form_rubro() {
  const [nombre, setNombre] = useState("");
  const [horario, setHorario] = useState("");
  const [zona, setZona] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [error, setError] = useState(null);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleHorarioChange = (event) => {
    setHorario(event.target.value);
  };

  const handleZonaChange = (event) => {
    setZona(event.target.value);
  };

  const handleUbicacionChange = (event) => {
    setUbicacion(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
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
      setHorario("");
      setZona("");
      setUbicacion("");
      setDescripcion("");
      setError(null);
      ("Nombre guardado exitosamente");
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
