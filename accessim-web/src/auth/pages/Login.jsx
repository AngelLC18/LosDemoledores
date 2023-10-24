import { Layout } from "./Layout";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { Ancora, Text } from "../../components/ui";
import styled from "../../mokups/styled.json";
import { useAuth, useForm } from "../../hooks";

export const Login = () => {
  const { inputStyled, labelStyled } = styled;
  const {
    formState: { email, password },
    onChange,
    onReset,
  } = useForm({ email: "", password: "" });
  const {
    startGoogleSignIn,
    startGithubSignIn,
    startLoginWithEmailPassword,
    errorMessage,
  } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    startLoginWithEmailPassword({ email, password });
    onReset();
  }

  return (
    <Layout title="Inicia sesión en tu cuenta">
      <form onSubmit={handleSubmit} className="space-y-4" action="#">
        {/* input email */}
        <div>
          <label htmlFor="email" className={labelStyled}>
            Correo Electronico
          </label>
          <div className="mt-2">
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

        {/* input password */}
        <div>
          <label htmlFor="password" className={labelStyled}>
            Contraseña
          </label>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Contraseña"
              className={inputStyled}
              onChange={onChange}
              value={password}
            />
          </div>
        </div>

        <div className={`${!!errorMessage ? "block" : "hidden"}`}>
          <p className="text-red-500 tracking-wider font-medium text-sm">
            {errorMessage}
          </p>
        </div>

        <div>
          <button className="flex w-full justify-center duration-200 rounded-md bg-indigo-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Iniciar Sesión
          </button>
        </div>
      </form>

      <p className="text-center capitalize text-gray-600 dark:text-white">
        O Ingrese con
      </p>

      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={startGoogleSignIn}
          className="flex w-full justify-center rounded-md border bg-white dark:bg-gray-900 border-gray-800 hover:bg-gray-700 duration-200 hover:border-gray-700 py-2 leading-6  shadow-sm"
        >
          <img
            src="/src/assets/icons8-google.svg"
            className="w-5"
            alt="google-icon"
          ></img>
        </button>
        <button
          className="flex w-full justify-center rounded-md border border-gray-900 bg-gray-800 hover:bg-purple-800 duration-200 hover:border-gray-700 py-2 leading-6  shadow-sm"
          onClick={startGithubSignIn}
        >
          <BsGithub className="text-xl" />
        </button>
      </div>

      <div className="flex items-center justify-end gap-2">
        <Text>No posees cuenta?</Text>
        <Ancora path="/auth/register">Registrate aquí</Ancora>
      </div>
    </Layout>
  );
};
