import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #1a1a2e;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  padding: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #e94560;
  }
`;

const DashboardNav = () => {
  return (
    <Nav>
      <NavLink to="/dashboard">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/dashboard/settings">Settings</NavLink>
    </Nav>
  );
};

export default DashboardNav;
