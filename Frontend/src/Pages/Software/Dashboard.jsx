import React, { useState } from "react";
import styled from "styled-components";
import CreatePost from "../../Components/Software/Dashboard/CreatePost";
import DashboardNav from "../../Components/Software/Dashboard/DashboardNav";
import LogoutButton from "../../Components/Software/Dashboard/LogoutButton";
import RecentPosts from "../../Components/Software/Dashboard/RecentPosts";
import UserProfile from "../../Components/Software/Dashboard/UserProfile";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f7f9fc;
  min-height: 100vh;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Dashboard = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Function to refresh posts in RecentPosts component
  const refreshPosts = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <Container>
      <DashboardNav />
      <GridContainer>
        <Sidebar>
          <UserProfile />
          <LogoutButton />
        </Sidebar>
        <MainContent>
          <RecentPosts refreshTrigger={refreshTrigger} />
          <CreatePost refreshPosts={refreshPosts} />
        </MainContent>
      </GridContainer>
    </Container>
  );
};

export default Dashboard;
