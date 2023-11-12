import { useState } from "react";

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(false);

  //Abrir modal
  const openModal = () => setIsOpen(true);
  //Cerrar modal
  const closeModal = () => setIsOpen(false);

  return [isOpen, openModal, closeModal];
};
