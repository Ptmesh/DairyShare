import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a2e;
`;

const FormWrapper = styled.div`
  background: #16213e;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #0f3460;
`;

const Title = styled.h2`
  color: #e94560;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  outline: none;
  background: #fff;
`;

const Button = styled.button`
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background: #0f3460;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #e94560;
  }
`;

const Text = styled.p`
  color: white;
  text-align: center;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email,
          password,
        }
      );
      toast.success("Login successful!");
      navigate("/dashboard"); // Redirect to a dashboard or home page after login
    } catch (error) {
      toast.error("There was an error logging in!");
      console.error("There was an error logging in!", error);
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </Form>
        <Text>
          Don't have an account?{" "}
          <Link to="/register" style={{ color: "#e94560" }}>
            Register
          </Link>
        </Text>
      </FormWrapper>
      <ToastContainer />
    </Container>
  );
};

export default Login;
