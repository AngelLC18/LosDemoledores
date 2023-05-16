import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  
    const user = {
      name: 'John Doe',
      email: email
    };

    setLoggedIn(true);
    setUser(user);

    setEmail('');
    setPassword('');
  };

  const renderLoginForm = () => {
    return (
      <div>
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Contraseña:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    );
  };

  const renderUserDetails = () => {
    return (
      <div>
        <h2>Bienvenido, {user.name}!</h2>
        <p>Email: {user.email}</p>
      </div>
    );
  };

  return (
    <div>
      {loggedIn ? renderUserDetails() : renderLoginForm()}
    </div>
  );
};

export default Login;
