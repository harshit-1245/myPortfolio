import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormDesign.css";
import axios from "axios";
const baseUrl ="https://portfolio-backend-og7d.onrender.com"

const Register = ({ setIsLogged }) => {

  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (user.password !== user.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(`${baseUrl}/user/register`, {
        firstname: user.firstName,
        lastname: user.lastName,
        email: user.email,
        password: user.password,
      });

      if (response.status === 201) {
        const userData = response.data;
        setMessage("Registration successful");
        setIsLogged(userData);
        navigate("/");
      } else if (response.status === 409) {
        setMessage("Email is already registered");
      } else {
        // Handle other possible errors more gracefully
        const errorData = response.data;
        setMessage(`Error: ${errorData.message}`);
      }
    } catch (error) {
      // Handle network errors and provide a user-friendly message
      if (error.response) {
        setMessage(`Error: ${error.response.data.message}`);
      } else {
        setMessage("Network error, please check your connection");
      }
    }
  };

  return (
    <div className="register-form-container">
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          required
          value={user.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          required
          value={user.lastName}
          onChange={handleChange}
        />
      </div>
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
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          required
          value={user.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <button className="button" type="submit">
        Register
      </button>
      <div className="line">or</div>
      <button className="button" onClick={() => navigate("/login")}>
        Login
      </button>
    </form>
    {message && <p className="message">{message}</p>}
  </div>
  );
};

export default Register;
