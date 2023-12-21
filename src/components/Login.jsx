import React, { useState } from "react";
import Main from "./Main";

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    // Basic authentication logic (hard-coded credentials)
    const validUsername = "Kiara";
    const validPassword = "Kia123";

    if (username === validUsername && password === validPassword) {
      setLoggedIn(true);
      alert('You logged in successfully!!.');
    } else {
      setLoggedIn(false);
      setError("Invalid username or password");
    }
  }

  return (
    <div>
      <div className="container">
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br /><br />
        <input
          type="password"
          name="password"
          placeholder="Enter Valid Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <br />
        <button onClick={handleLogin} type="submit">Login</button><br /> <br /> <br /> <hr />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

      {isLoggedIn && <Main />}
    </div>
  );
}

export default Login;
