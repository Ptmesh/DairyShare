import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const PostsContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

const PostCard = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

const PostTitle = styled.h3`
  color: #0f3460;
  margin-bottom: 10px;
`;

const PostContent = styled.p`
  color: #333333;
`;

const RecentPosts = ({ refreshTrigger }) => {
  const [posts, setPosts] = useState([]);

  const fetchRecentPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/posts");
      setPosts(response.data); // Update posts state with fetched data
    } catch (error) {
      console.error("Error fetching recent posts:", error);
    }
  };

  useEffect(() => {
    fetchRecentPosts();
  }, [refreshTrigger]);

  return (
    <PostsContainer>
      <h2>Recent Posts</h2>
      {posts.map((post) => (
        <PostCard key={post.id}>
          <PostTitle>{post.title}</PostTitle>
          <PostContent>{post.content}</PostContent>
        </PostCard>
      ))}
    </PostsContainer>
  );
};

export default RecentPosts;
