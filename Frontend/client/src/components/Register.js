import React, { useState } from "react";
import axios from "axios";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { Form, Button } from "react-bootstrap";
// import './cssfile/register.css'
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh on form submission

    const payload = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    try {
      // Make POST request to register API with payload
      const response = await axios.post("https://your-api-url.com/register", payload);

      // Handle success response
      console.log("Registration successful:", response.data);
      // You can redirect the user or clear the form, etc.
    } catch (error) {
      // Handle error response
      setErrorMessage(error.response?.data?.message || "Registration failed. Please try again.");
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Register User</h2>
      <p className="text-danger">{errorMessage}</p>
      <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "400px" }}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <UserOutlined />
              </span>
            </div>
            <Form.Control
              type="text"
              name="username"
              placeholder="Username"
              required
              value={formData.username}
              onChange={handleChange}
            />
          </div>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <MailOutlined />
              </span>
            </div>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <LockOutlined />
              </span>
            </div>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
