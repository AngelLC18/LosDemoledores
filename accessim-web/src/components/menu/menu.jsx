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
    