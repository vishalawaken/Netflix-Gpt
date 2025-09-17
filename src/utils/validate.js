const CheckValidData = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/.test(password);

  const isNameIsValid = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(name);

  if (!isEmailValid) {
    return "Email is not Valid";
  }
  if (!isPasswordValid) {
    return "Password is not Valid";
  }
  if (name && !isNameIsValid) {
    return "Name is not Valid";
  }
  return null;
};

export default CheckValidData;
