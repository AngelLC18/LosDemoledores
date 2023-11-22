import { useState } from "react";
import { collection, addDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../services/firebaseConfig";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import "./Form_rubro.css";
import MultiSelect from "./components/multiselect";

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

    if (!horario.trim()) {
      setError("El horario no puede estar vacío");
      return;
    }

    if (!ubicacion.trim()) {
      setError("La ubicación no puede estar vacía");
      return;
    }

    try {
      await addDoc(collection(FirebaseDB, "locales"), {
        nombre,
        horario,
        zona,
        ubicacion,
        descripcion,
      });

      setNombre("");
      setHorario("");
      setZona("");
      setUbicacion("");
      setDescripcion("");
      setError(null);

      alert("Registro realizado con éxito!");
    } catch (error) {
      setError("Error al guardar los datos: " + error.message);
    }
  };

  return (
    <div className="form-container mt-10">
      <header>
        <Navbar />
      </header>
      <form className="center-form mb-30" onSubmit={handleFormSubmit}>
        <label className="label file:nom">
          Nombre:
          <input
            className="input"
            type="text"
            value={nombre}
            onChange={handleNombreChange}
          />
        </label>

        <label className="label horario">
          Horario:
          <input
            className="input"
            type="text"
            value={horario}
            onChange={handleHorarioChange}
          />
        </label>

        <label className="label zona">
          Zona:
          <select
            className="input selectZona"
            value={zona}
            onChange={handleZonaChange}
          >
            <option value="" disabled>
              Selecciona una zona
            </option>
            <option value="norte">Norte</option>
            <option value="sur">Sur</option>
            <option value="este">Este</option>
            <option value="oeste">Oeste</option>
            <option value="centro">Centro</option>
          </select>
        </label>

        <label className="label multiselect">
          <MultiSelect className="input" />
        </label>

        <label className="label ubi">
          Ubicación:
          <input
            className="input"
            type="text"
            value={ubicacion}
            onChange={handleUbicacionChange}
          />
        </label>

        <label className="label desc">
          Descripción:
          <textarea
            className="input"
            placeholder="Describe tu local aqui"
            value={descripcion}
            onChange={handleDescripcionChange}
          />
        </label>

        {error && <p>{error}</p>}
        <button className="boton" type="submit">
          Registrar mi local
        </button>
      </form>
      {/*<Footer />*/}
    </div>
  );
}

export default Form_rubro;
