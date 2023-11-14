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