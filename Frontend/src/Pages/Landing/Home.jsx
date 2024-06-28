import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #1a1a2e;
  color: #fff;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 50px;
  background-color: #16213e;
  box-shadow: 0px 0px 10px 0px #0f3460;
`;

const Brand = styled.h1`
  font-size: 24px;
  color: #e94560;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 10px 20px;
  background-color: #0f3460;
  border-radius: 5px;
  transition: background 0.3s ease;

  &:hover {
    background-color: #e94560;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 40px;
`;

const DummyData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #16213e;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(15, 52, 96, 0.2);
`;

const DataItem = styled.p`
  font-size: 16px;
  color: #fff;
  margin: 5px 0;
`;

const Home = () => {
  return (
    <Container>
      <Navbar>
        <Brand>DairyShare</Brand>
        <NavLinks>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </NavLinks>
      </Navbar>
      <MainContent>
        <Title>Welcome to DairyShare</Title>
        <Description>
          DairyShare is a platform where you can share your daily experiences
          and thoughts with others. Join our community to start sharing your
          stories today!
        </Description>
        <DummyData>
          <DataItem>Latest Post: How to stay productive</DataItem>
          <DataItem>Top User: JaneDoe</DataItem>
          <DataItem>Join us and share your story!</DataItem>
        </DummyData>
      </MainContent>
    </Container>
  );
};

export default Home;
