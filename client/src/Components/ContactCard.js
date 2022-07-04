import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteContact } from "../JS/Actions/contact";

const ContactCard = ({contact}) => {
  const dispatch = useDispatch();
  const navigate =useNavigate()
  return <div>
    

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/favicon.ico" />
      <Card.Body>
        <Card.Title>name :{contact.name}</Card.Title>
        <Card.Text>email :{contact.email}</Card.Text>
        <Card.Text>phone :{contact.phone}</Card.Text>
 
        <Button variant="primary" onClick={()=>dispatch(deleteContact(contact._id))}>delete</Button>
        <Button variant="primary" onClick={()=>navigate(`/edit/${contact._id}`)}>edit</Button>
      </Card.Body>
    </Card>
     </div>
};

export default ContactCard;
