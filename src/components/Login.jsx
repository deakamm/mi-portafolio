import React, { useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import './Login.css';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', formData);
      console.log(response.data);
      setUser(response.data.user);
      localStorage.setItem('access_token', response.data.access_token);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>deakamm- Login</title>
      </Helmet>
    </HelmetProvider>

    <Container fluid className="login-wrapper">
      <div className="login-left animate__animated animate__zoomIn">
        <h3>Login</h3>
        <h4>
          ───&nbsp;&nbsp;Page <strong>06</strong>
        </h4>
      </div>
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <br/>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      {user && (
        <div className="user-details">
          <h3>User Details</h3>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
    </Container>
    </>
  );
};

export default Login;
