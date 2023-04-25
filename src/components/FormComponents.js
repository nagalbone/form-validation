import "../App.css";
import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
const FormComponents = () => {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "First name is Required";
    }
    if (!values.email) {
      errors.email = "Email is Required";
    }

    if (!values.password) {
      errors.password = "Password name is Required";
    }
    return errors;
  };
  return (
    <>
      <Container>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <h1 className="text-center">Validation Form</h1>
            <hr />
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter Full Name"
                  value={formValues.username}
                  onChange={handleChange}
                />
                <span>{formErrors.username}</span>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <span>{formErrors.email}</span>
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="number" placeholder="Enter Mobile" />
              </Form.Group> */}

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                />
                <span>{formErrors.password}</span>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col mr={3}></Col>
        </Row>
      </Container>
    </>
  );
};

export default FormComponents;
