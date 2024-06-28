// UserProfile.jsx
import React from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

const ProfileHeader = styled.h2`
  color: #0f3460;
  margin-bottom: 10px;
`;

const ProfileInfo = styled.p`
  color: #333333;
  margin-bottom: 5px;
`;

const UserProfile = () => {
  const user = {
    username: "demoUser",
    email: "demo@example.com",
    bio: "This is a demo user profile.",
  };

  return (
    <ProfileContainer>
      <ProfileHeader>User Profile</ProfileHeader>
      <ProfileInfo>
        <strong>Username:</strong> {user.username}
      </ProfileInfo>
      <ProfileInfo>
        <strong>Email:</strong> {user.email}
      </ProfileInfo>
      <ProfileInfo>
        <strong>Bio:</strong> {user.bio}
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default UserProfile;
