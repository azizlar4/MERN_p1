import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AddContact } from "../JS/Actions/contact";
import  { Link } from "react-router-dom";

const Add = () => {
  const [newContact, setnewContact] = useState({});
  const dispatch = useDispatch();
  const handleChnage = (e) => {
    setnewContact({ ...newContact, [e.target.name]: e.target.value });
  };
  const add = () => {
    dispatch(AddContact(newContact));
  };
  return (
    <div>
      <h2>Add contact</h2>
      <Form.Label>Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="name"
        name="name"
        value={newContact.name}
        onChange={handleChnage}
      />
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter email"
        name="email"
        value={newContact.email}
        onChange={handleChnage}
      />
      <Form.Label>phone</Form.Label>
      <Form.Control
        type="text"
        placeholder="phone"
        name="phone"
        value={newContact.phone}
        onChange={handleChnage}
      />
      <Link to='/users'><Button variant="primary" type="submit" onClick={() => add()}>
        add contact
      </Button>
      </Link>
    </div>
  );
};

export default Add;
