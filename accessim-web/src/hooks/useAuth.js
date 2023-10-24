import { useDispatch, useSelector } from "react-redux";
import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  singInWithGoogle,
  singInWithGithub,
} from "../firebase/provider";
import { checkingCredentials, login, logout } from "../store/auth/authSlice";

export const useAuth = () => {
  const { status, uid, email, displayName, photoURL, errorMessage } =
    useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function checkingAuthentication() {
    dispatch(checkingCredentials());
  }
  async function startGithubSignIn() {
    dispatch(checkingCredentials());
    const result = await singInWithGithub();
    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  }
  async function startGoogleSignIn() {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();
    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  }

  async function startCreatingUserWithEmailPassword({
    email,
    password,
    displayName,
  }) {
    dispatch(checkingCredentials());
    const result = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });
    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  }

  async function startLoginWithEmailPassword({ email, password }) {
    dispatch(checkingCredentials());
    const result = await loginWithEmailPassword({ email, password });
    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  }

  async function startLogout() {
    await logoutFirebase();
    dispatch(logout());
  }

  return {
    // props
    status,
    uid,
    email,
    displayName,
    photoURL,
    errorMessage,

    // methods
    checkingAuthentication,
    startGoogleSignIn,
    startGithubSignIn,
    startCreatingUserWithEmailPassword,
    startLoginWithEmailPassword,
    startLogout,
  };
};
