import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

axios.defaults.withCredentials = true;

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

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          username,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      toast.success("Registration successful!");
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("There was an error registering!");
      }
      console.error("There was an error registering!", error);
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Register</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
          <Button type="submit">Register</Button>
        </Form>
        <Text>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#e94560" }}>
            Login
          </Link>
        </Text>
      </FormWrapper>
      <ToastContainer />
    </Container>
  );
};

export default Register;
