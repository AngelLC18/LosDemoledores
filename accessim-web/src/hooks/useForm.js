import { useState } from "react";

export const useForm = (initialState) => {
  const [formState, setFormState] = useState(initialState);

  function onChange({ target }) {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  function onReset() {
    setFormState(initialState);
  }

  return {
    ...formState,
    formState,
    onChange,
    onReset,
  };
};
