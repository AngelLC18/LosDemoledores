import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  updateProfile,
  fetchSignInMethodsForEmail,
  linkWithPopup,
} from "firebase/auth";
import { FirebaseAuth } from "./config";
import { getErrorMessageFromFirebaseError } from "../utils/getErrorMessageFromFirebase";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const singInWithGithub = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, githubProvider);
    const { displayName, email, photoURL, uid } = result.user;
    console.log("singInWithGithub result", result);
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    if (error.code === "auth/account-exists-with-different-credential") {
      const email = error.email || (error.credential && error.credential.email);
      if (email) {
        const providers = await fetchSignInMethodsForEmail(FirebaseAuth, email);
        const existingProvider = providers[0];
        const existingCredential = await signInWithPopup(
          FirebaseAuth,
          new existingProvider()
        );
        const result = await linkWithPopup(
          existingCredential.user,
          githubProvider
        );
        // User successfully linked.
        const { displayName, email, photoURL, uid } = result.user;
        return {
          ok: true,
          displayName,
          email,
          photoURL,
          uid,
        };
      } else {
        console.error("No email found in error", error);
        return {
          ok: false,
          errorMessage: "No email found in error",
        };
      }
    } else {
      const errorMessage = getErrorMessageFromFirebaseError(error.message);
      console.error("Error during GitHub sign in", error);
      return {
        ok: false,
        errorMessage,
      };
    }
  }
};
export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult( result );
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      // User info
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorMessage = getErrorMessageFromFirebaseError(error.message);

    return {
      ok: false,
      errorMessage,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;

    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    const errorMessage = getErrorMessageFromFirebaseError(error.message);
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL, displayName } = resp.user;

    return {
      ok: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (error) {
    const errorMessage = getErrorMessageFromFirebaseError(error.message);
    return {
      ok: false,
      errorMessage,
    };
  }
};
export const updateUser = async ({ email, password, displayName }) => {
  try {
    const user = FirebaseAuth.currentUser;

    if (displayName !== user.displayName) {
      await updateProfile(user, { displayName });
    }

    if (email !== user.email) {
      try {
        await user.updateEmail(email);
      } catch (error) {
        if (error.code === "auth/requires-recent-login") {
          // Reauthenticate the user and try again
          // Replace 'reauthenticate' with the actual function you use to reauthenticate the user
          await reauthenticate();
          await user.updateEmail(email);
        } else {
          throw error;
        }
      }
    }

    if (password) {
      try {
        await user.updatePassword(password);
      } catch (error) {
        if (error.code === "auth/requires-recent-login") {
          // Reauthenticate the user and try again
          // Replace 'reauthenticate' with the actual function you use to reauthenticate the user
          await reauthenticate();
          await user.updatePassword(password);
        } else {
          throw error;
        }
      }
    }

    return { ok: true };
  } catch (error) {
    const errorMessage = getErrorMessageFromFirebaseError(error.message);
    return { ok: false, errorMessage };
  }
};
export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
