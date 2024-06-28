import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

const Button = styled.button`
  padding: 15px 30px;
  background: #f0f0f0;
  color: #333333;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #e94560;
    color: white;
  }
`;

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/api/auth/logout");
      navigate("/login");
      toast.success("Logout successful!");
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("Error logging out!");
    }
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
