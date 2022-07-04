import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Profile = () => {
    const user = useSelector((state => state.userReducer.user) );
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/favicon.ico" />
        <Card.Body>
          <Card.Title>{user &&  user.name}</Card.Title>
          <Card.Text>{user &&  user.email}</Card.Text>
          <Card.Text>{user &&  user.phone}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
