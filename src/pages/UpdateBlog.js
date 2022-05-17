import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import UpdateBlogForm from "../components/UpdateBlogForm";
import { useAuth } from "../contexts/AuthContextProvider";
import {updateBlog} from "../contexts/BlogFunctions";

const UpdateBlog = () => {
  const { currentUser } = useAuth();
  const [blogUpdate, setBlogUpdate] = useState({
    title: "",
    image: "",
    description: "",
  });
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      updateBlog(updateBlog);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }

  return <div>
      <UpdateBlogForm
        blogUpdate ={ blogUpdate  }
        setBlogUpdate ={ setBlogUpdate  }
        handleSubmit={ handleSubmit }
      />
  </div>;
};

export default UpdateBlog;
