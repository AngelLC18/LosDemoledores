import { Layout } from "./Layout";
import { BsGithub } from "react-icons/bs";
import { Ancora, Text } from "../../components/ui";
import { useAuth, useForm } from "../../hooks";

export const Login = () => {
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
          <label htmlFor="email" className="relative cursor-text">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Correo electronico"
              className="h-11 w-full bg-white pl-2 dark:bg-slate-700 dark:text-white   border-black border-[1px] rounded-[4px] border-opacity-30 outline-none focus:border-blue-700 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
              onChange={onChange}
              value={email}
            />
            <span className="text-opacity-80 dark:text-white   dark:bg-slate-700 text-gray-600 bg-white absolute left-3 -top-[2px] px-1 transition duration-200 input-text">
              Correo Electronico
            </span>
          </label>
        </div>
        {/* input password */}
        <div>
          <label htmlFor="password" className="relative cursor-text">
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Correo electronico"
              className="h-11 w-full bg-white pl-2 dark:bg-slate-700 dark:text-white   border-black border-[1px] rounded-[4px] border-opacity-30 outline-none focus:border-blue-700 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
              onChange={onChange}
              value={password}
            />
            <span className="text-opacity-80 dark:text-white   dark:bg-slate-700 text-gray-600 bg-white absolute left-3 -top-[2px] px-1 transition duration-200 input-text">
              Contraseña
            </span>
          </label>
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
          className="flex w-full justify-center rounded-md border border-gray-900 bg-gray-800 dark:bg-purple-800 dark:hover:bg-purple-950 hover:bg-purple-800 duration-200 hover:border-gray-700 py-2 leading-6  shadow-sm"
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
