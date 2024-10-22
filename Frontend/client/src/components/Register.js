import React from "react";
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Button } from 'react-bootstrap';

const Register = () =>{
    return(
        <>
          <div className="container mt-5">
      <h2 className="text-center">Register_User</h2>
       <p className="text-danger"></p>
      <Form  className="mx-auto" style={{ maxWidth: '400px' }}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><UserOutlined /></span>
            </div>
            <Form.Control
              type="text"
              name="username"
              
              placeholder="Username"
              required
            />
          </div>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><MailOutlined /></span>
            </div>
            <Form.Control
              type="email"
              name="email"
             
              placeholder="Email"
              required
            />
          </div>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><LockOutlined /></span>
            </div>
            <Form.Control
              type="password"
              name="password"
             
              placeholder="Password"
              required
            />
          </div>
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Register
        </Button>
      </Form>
    </div>
        </>
    )
}
export default Register