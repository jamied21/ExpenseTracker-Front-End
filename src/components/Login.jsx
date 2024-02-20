// LoginComponent.jsx

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/user/login", {
        username,
        password,
      });
      const token = response.data.token;

      // Store the token securely (e.g., in localStorage)
      localStorage.setItem("token", token);

      // Redirect to the expenses page or any other page
      history.push("/expenses");
    } catch (error) {
      console.error("Login failed:", error.response.data.message);
      // Handle login failure (show error message, etc.)
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginComponent;
