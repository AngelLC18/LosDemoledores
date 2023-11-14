import React from "react";
import { useState, useEffect } from "react";
import { Dropdown, DropdownButton, DropdownItem } from "reactstrap";

const App = () => {
    const [categorias, setCategorias] = useState([
      "Celiacos",
      "Diabeticos",
      "Hipertensos",
      "Veganos",
      "Vegetarianos",
    ]);

    const [items, setItems] = useState([]);

    useEffect(() => {
      // Obtener las categorías y los elementos de la API
      const url = "https://www.google.com.ar/maps/@-38.9495443,-68.0575857,14.76z?entry=ttu";
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setCategorias(data.categorias);
          setItems(data.items);
        });
    }, []);

    return (
        <div>
          <h1>Accessim</h1>
          <div>
            <DropdownButton title="Categorías" id="categorias-dropdown">
              {categorias.map((categoria) => (
                <DropdownItem key={categoria.id} value={categoria.id}>
                  {categoria.nombre}
                </DropdownItem>
              ))}
            </DropdownButton>
            <ul id="items-list">
              {items.filter((item) => item.categoria === categorias[0].id).map((item) => (
                <li key={item.id}>
                  <img src={item.imagen} alt={item.nombre} />
                  <p>{item.nombre}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    };
    
    export default App;