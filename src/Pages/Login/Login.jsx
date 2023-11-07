import React, { useContext, useState } from "react";
import "./login.css";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const { loading, error, dispatch } = useContext(AuthContext);
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_PROXY_URL}/auth/login`,
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILED", payload: err.response.data });
    }
  };

  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        id="username"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="password"
        placeholder="password"
        id="password"
        onChange={(e) => handleChange(e)}
      />
      <button disabled={loading} onClick={(e) => handleLogin(e)}>
        Login
      </button>
      {error && <span>{error.message}</span>}
    </div>
  );
};

export default Login;
