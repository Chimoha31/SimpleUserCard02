import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddUser = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <label>Name</label>
        <input type="text" placeholder="Enter Name" style={{display: "block", width:"400px", padding: "8px 5px", marginTop: "3px", border:"1px solid #ccc", borderRadius: "5px"}} />
      </Form.Group>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger mx-2">
        Cancel
      </Link>
    </Form>
  );
};

export default AddUser;
