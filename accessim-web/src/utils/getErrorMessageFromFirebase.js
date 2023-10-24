export function getErrorMessageFromFirebaseError(error) {
  const errorMappings = {
    "auth/invalid-email": "The email address is not valid.",
    "auth/email-already-in-use":
      "The email address is already in use by another user.",
    "auth/wrong-password":
      "Invalid email or password. Please check your credentials and try again.",
    "auth/user-not-found":
      "User not found. Please make sure you have entered the correct information.",
  };

  const errorMessage = error.toString();
  for (const errorKey in errorMappings) {
    if (errorMessage.includes(errorKey)) {
      return errorMappings[errorKey];
    }
  }

  return "Ha ocurrido un error al procesar la solicitud. Por favor, inténtalo nuevamente.";
}
