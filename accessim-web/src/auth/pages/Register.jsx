import { Ancora } from "../../components/ui";
import { Layout } from "./Layout";
import styled from "../../mokups/styled.json";
import { useAuth, useForm } from "../../hooks";

export const Register = () => {
  const { inputStyled, labelStyled, spanStyled } = styled;
  const {
    formState: { displayName, email, password },
    onChange,
    onReset,
  } = useForm({ displayName: "", email: "", password: "" });
  const { startCreatingUserWithEmailPassword, errorMessage } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    startCreatingUserWithEmailPassword({ displayName, email, password });
    onReset();
  }

  console.log(errorMessage);

  return (
    <Layout title="Registro">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col flex-wrap dark:bg-slate-700 bg-white w-auto p-6 rounded-lg"
        action="#"
        method="POST"
      >
        <div className="mt-2">
          <label htmlFor="displayName" className="relative cursor-text">
            <input
              id="displayName"
              name="displayName"
              type="text"
              required
              placeholder="Usuario"
              className="h-11 w-full bg-white pl-2 dark:bg-slate-700 dark:text-white   border-black border-[1px] rounded-[4px] border-opacity-30 outline-none focus:border-blue-700 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
              onChange={onChange}
              value={displayName}
            />
            <span className="text-opacity-80 dark:text-white   dark:bg-slate-700 text-gray-600 bg-white absolute left-3 -top-[2px] px-1 transition duration-200 input-text">
              Usuario
            </span>
          </label>
        </div>

        <div>
          <label htmlFor="email" className={labelStyled}>
            Correo Electronico
          </label>
          <div className="mt-2 w">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Correo electronico"
              className={inputStyled}
              onChange={onChange}
              value={email}
            />
          </div>
        </div>

        <div>
          <label htmlFor="password " className={labelStyled}>
            Contraseña
          </label>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="contraseña"
              className={inputStyled}
              onChange={onChange}
              value={password}
              pattern=".{8,16}"
              title="La contraseña debe tener entre 8 y 16 caracteres"
            />
          </div>
        </div>

        <div className={`${!!errorMessage ? "block" : "hidden"}`}>
          <p className="text-red-500 tracking-wider font-medium text-sm ">
            {errorMessage}
          </p>
        </div>

        <div>
          <button
            type="submit"
            className="mt-2 flex w-full justify-center duration-200 rounded-md bg-indigo-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Registrarte
          </button>
        </div>
      </form>

      <div className="flex items-center justify-end gap-2">
        <Ancora path="/auth/login">Inicia sesión en tu cuenta</Ancora>
      </div>
    </Layout>
  );
};