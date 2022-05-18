import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BlogForm from '../components/BlogForm'
import { useAuth } from '../contexts/AuthContextProvider';
import { addBlog } from '../contexts/BlogFunctions';

const NewBlog = () => {
  // const {currentUser} = useAuth();
  const [newBlog, setNewBlog] = useState({
    title: '',
    image: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
    addBlog(newBlog);
    navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <BlogForm
      newBlog={ newBlog }
      setNewBlog={ setNewBlog }
      handleSubmit={ handleSubmit }
      />
    </div>
  )
}

export default NewBlog