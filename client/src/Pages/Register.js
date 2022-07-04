import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../JS/Actions/user";

const Register = () => {

const [newUser, setnewUser] = useState({});
const dispatch=useDispatch();
const navigate=useNavigate()
const handleChnage=(e)=>{
    setnewUser({...newUser,[e.target.name]:e.target.value})
}
const handleUser=(e)=>{
    e.preventDefault()
    dispatch(register(newUser))
    navigate('/profile')
}
  return (
    <div>
      <Form>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" onChange={handleChnage} />

        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  name="email" onChange={handleChnage}/>

        <Form.Label>phone</Form.Label>
        <Form.Control type="text" placeholder="Enter phone" name="phone" onChange={handleChnage} />

        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Password" name="password" onChange={handleChnage}/>

        <Button variant="primary" type="submit" onClick={handleUser}>
          register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
