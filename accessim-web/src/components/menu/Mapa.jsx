import React, { useState, useEffect } from "react";


const Mapa = () => {
  const [categorias, setCategorias] = useState([
    "Celiacos",
    "Diabeticos",
    "Hipertensos",
    "Veganos",
    "Vegetarianos",
  ]);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = "AIzaSyAWyMMdLdBrlKRUJUuEjG_CMm-E9KoKdVE";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCategorias(data.categorias);
        setItems(data.items);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Accessim</h1>
        <div className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="categorias-dropdown" className="block mb-2 font-medium text-gray-700">Categorías</label>
            <select id="categorias-dropdown" className="border p-2 rounded-md" value={categorias[0].id} onChange={(e) => setCategorias(categorias.filter((categoria) => categoria.id === e.target.value))}>
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nombre}
                </option>
              ))}
            </select>
          </div>
          <ul id="items-list" className="flex flex-wrap justify-center">
            {items.map((item) => (
              <li key={item.id} className="w-64 h-64 p-4 border rounded-md m-2">
                <img src={item.imagen} alt={item.nombre} className="w-full h-full object-cover" />
                <p className="text-gray-700 font-medium">{item.nombre}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mapa;
