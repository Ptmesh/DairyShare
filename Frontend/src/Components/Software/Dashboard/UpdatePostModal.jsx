import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

const Button = styled.button`
  padding: 10px 20px;
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

const UpdatePostModal = ({ post, onClose, onPostUpdated }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:3000/api/posts/${post.id}`,
        { title, content },
        { withCredentials: true }
      );
      toast.success("Post updated successfully!");
      onPostUpdated();
      onClose();
    } catch (error) {
      toast.error("There was an error updating the post!");
      console.error("Error updating post:", error);
    }
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <h2>Edit Post</h2>
        <form onSubmit={handleUpdate}>
          <Input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="Enter post content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="4"
          />
          <Button type="submit">Update Post</Button>
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>
        </form>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default UpdatePostModal;
