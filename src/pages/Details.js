import { Grid } from "@mui/material";
import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { useAuth } from "../contexts/AuthContextProvider";
import { deleteBlog, useBlogs } from "../contexts/BlogFunctions";
import { StyledButton } from "./RegisterStyles";

const Details = () => {
  const {currentUser} = useAuth();
  console.log(currentUser.email);
  const {id} = useParams();
  console.log(id)
  const blog = useBlogs();
  console.log(blog);
  const navigate = useNavigate();
const handleUpdate = (e) => {
    navigate("/updateblog/" + id);
}
const handleDelete = (e) => {
  deleteBlog(id);
  navigate("/dashboard");
}

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      {blog === undefined ? (
        <p>Loading</p> ) : blog ? (
          blog?.map((item, index) => (
           item.id === id ? (
             <div style={{width: "75vw"}}>
              <BlogCard key={index} blog={item} />
              {item.blogger === currentUser.email ? (
                <div>
                <StyledButton onClick={handleUpdate}>UPDATE</StyledButton>
                <StyledButton onClick={handleDelete}>DELETE</StyledButton></div>) : null}
                </div>
            ) : null
          )) ) : (<h3>No Data</h3>
          )}
    </div>
  );
};

export default Details;
