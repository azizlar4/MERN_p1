import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { editContact, getOneContact } from "../JS/Actions/contact";

const Edit = () => {
  const dispatch = useDispatch();
  const [newContact, setnewContact] = useState({});
  const contactToGet = useSelector(
    state => state.contactReducer.contactToGet
  );
  const match = useMatch("/edit/:id");
  const navigate = useNavigate();
  const handleChnage = (e) => {
    setnewContact({ ...newContact, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    dispatch(getOneContact(match.params.id));
  });
  const handleEdit = () => {
    dispatch(editContact(match.params.id, newContact));
    navigate(-1);
  };
 
  return (
    <div>
      <Form.Label>Name</Form.Label>
      <Form.Control
        type="text"
        placeholder={`${contactToGet.name}`}
        name="name"
        value={newContact.name}
        onChange={handleChnage}
      />
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type="email"
        placeholder={`${contactToGet.email}`}
        name="email"
        value={newContact.email}
        onChange={handleChnage}
      />
      <Form.Label>phone</Form.Label>
      <Form.Control
        type="text"
        placeholder={`${contactToGet.phone}`}
        name="phone"
        value={newContact.phone}
        onChange={handleChnage}
      />
      <Link to="/users">
        <Button variant="primary" type="submit" onClick={handleEdit}>
          edit contact
        </Button>
      </Link>
    </div>
  );
};

export default Edit;
