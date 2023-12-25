import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import Message from "./Message";
import axios from "axios";
import Cookies from "js-cookie";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const SubmitHandler = (e) => {
    e.preventDefault();

    const sendRequest = async () => {
      try {
        const response = await axios.post("http://localhost:8000/auth/login/", {
          email: email,
          password: password,
        });

        if (response.data.msg == "Login Success") {
          let cookie = response.data.token.access;
          Cookies.set("token", cookie);

          const getUserInfo = async () => {
            try {
              let authValue = "Bearer " + cookie;
              console.log("AuthValue =", authValue);
              const userresponse = await axios.get(
                "http://localhost:8000/auth/profile/",
                {
                  headers: {
                    Authorization: authValue,
                    Accept: "application/json",
                  },
                }
              );
              Cookies.set("id", userresponse.data.id);
              Cookies.set("name", userresponse.data.name);
              Cookies.set("email", userresponse.data.email);
              Cookies.set("date_joined", userresponse.data.date_joined);
            } catch (error) {
              console.log(error);
            }
          };
          getUserInfo();
          navigate("/");
        }
      } catch (error) {
        let value = String(error.response.data.errors.non_field_errors[0]);
        setMessage(value);
      }
    };
    sendRequest();
  };

  return (
    <FormContainer>
      <h1>LogIn</h1>
      {message && <Message variant="danger">{message}</Message>}
      <Form onSubmit={SubmitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Login
        </Button>
      </Form>
    </FormContainer>
  );
}

export default Login;
