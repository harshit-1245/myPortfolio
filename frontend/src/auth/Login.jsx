import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormDesign.css";
import axios from "axios";



const Login = ({ setIsLogged }) => {
const baseUrl ="https://portfolio-backend-og7d.onrender.com"


  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/user/login`, {
        email: user.email,
        password: user.password,
      });

      if (response.status === 200) {
        const userData = response.data;
        setMessage("Login Successful");
        // Call the handleLoginSuccess function to update the user state and navigate
        setIsLogged(userData);
        navigate("/");
      } else {
        setMessage("Email and Password Incorrect");
      }
    } catch (error) {
      console.error(error);
      setMessage("Email and Password Incorrect");
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button className="button" type="submit">
          Login
        </button>
        <div className="line">or</div>
        <button className="button" onClick={() => navigate("/register")}>
          Register
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Login;
