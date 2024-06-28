import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import UpdatePostModal from "../../Components/Software/Dashboard/UpdatePostModal";

const Container = styled.div`
  padding: 20px;
  background-color: #f7f9fc;
  min-height: 100vh;
`;

const PostContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const PostTitle = styled.h3`
  color: #0f3460;
`;

const PostContent = styled.p`
  color: #333333;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  background: #0f3460;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #e94560;
  }
`;

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/user/posts",
          {
            withCredentials: true,
          }
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching user posts:", error);
      }
    };

    fetchUserPosts();
  }, []);

  const deletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:3000/api/posts/${postId}`, {
        withCredentials: true,
      });
      toast.success("Post deleted successfully!");
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      toast.error("There was an error deleting the post!");
      console.error("Error deleting post:", error);
    }
  };

  const updatePost = (post) => {
    setSelectedPost(post);
  };

  const handlePostUpdated = () => {
    setSelectedPost(null);
    const fetchUserPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/user/posts",
          {
            withCredentials: true,
          }
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching user posts:", error);
      }
    };

    fetchUserPosts();
  };

  return (
    <Container>
      <h2>Your Posts</h2>
      {posts.map((post) => (
        <PostContainer key={post.id}>
          <PostTitle>{post.title}</PostTitle>
          <PostContent>{post.content}</PostContent>
          <Button onClick={() => updatePost(post)}>Edit</Button>
          <Button onClick={() => deletePost(post.id)}>Delete</Button>
        </PostContainer>
      ))}
      {selectedPost && (
        <UpdatePostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
          onPostUpdated={handlePostUpdated}
        />
      )}
    </Container>
  );
};

export default Profile;
