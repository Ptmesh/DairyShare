import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

const TextArea = styled.textarea`
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: #333;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 15px 30px;
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

const CreatePost = ({ refreshPosts }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/posts",
        {
          title,
          content,
          isPrivate,
          imageUrl,
        },
        {
          withCredentials: true,
        }
      );
      toast.success("Post created successfully!");
      console.log(response.data);
      setTitle("");
      setContent("");
      setIsPrivate(false);
      setImageUrl("");

      refreshPosts();
    } catch (error) {
      toast.error("There was an error creating the post!");
      console.error("Error creating post:", error);
      alert("Error");
    }
  };

  return (
    <FormContainer>
      <h2>Create New Post</h2>
      <Form onSubmit={handleSubmit}>
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
        <CheckboxLabel>
          <Checkbox
            type="checkbox"
            checked={isPrivate}
            onChange={(e) => setIsPrivate(e.target.checked)}
          />
          Private Post
        </CheckboxLabel>
        <Input
          type="text"
          placeholder="Enter image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <Button type="submit">Create Post</Button>
      </Form>
    </FormContainer>
  );
};

export default CreatePost;
