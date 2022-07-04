import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../JS/Actions/user";


const Login = () => {
    const [User, setUser] = useState({});
const dispatch=useDispatch();
const navigate=useNavigate();

const handleChnage=(e)=>{
    setUser({...User,[e.target.name]:e.target.value})
}
const handleUser=(e)=>{
    e.preventDefault()
    dispatch(login(User))
    navigate('/profile')
}
  return (
    <div>
      <Form>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChnage} />

        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Password" name="password" onChange={handleChnage} />

        <Button variant="primary" type="submit" onClick={handleUser}>
          login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
