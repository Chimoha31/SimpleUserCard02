import React from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserList = () => {
  return (
    <ListGroup className="my-3">
      <ListGroupItem className="py-3 d-flex justify-content-between">
        <strong>User 1</strong>
        <div className="ml-auto">
          <Link to="/edit/1" className="btn btn-warning mx-1">Edit</Link>
          <Button variant="danger">Delete</Button>
        </div>
      </ListGroupItem>
    </ListGroup>
  );
};

export default UserList;
