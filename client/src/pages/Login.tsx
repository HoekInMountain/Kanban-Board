import { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import Auth from "../utils/auth";
import { login } from "../api/authAPI";

const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const token = await login(loginData);
      Auth.login(token); // token is a string, not data.token
      navigate("/"); // redirect to board/home
    } catch (err: any) {
      console.error("Login failed:", err.message);
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>

        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          value={loginData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={loginData.password}
          onChange={handleChange}
          required
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;

