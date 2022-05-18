import { Grid } from "@mui/material";
import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { useAuth } from "../contexts/AuthContextProvider";
import { useBlogs } from "../contexts/BlogFunctions";
import { StyledButton } from "./RegisterStyles";

const Details = () => {
  const {currentUser} = useAuth();
  console.log(currentUser);
  const {id} = useParams();
  console.log(id)
  const blog = useBlogs();
  console.log(blog);
  const navigate = useNavigate();
const handleClick = (e) => {
    navigate("/updateblog/" + id);
}

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      {blog === undefined ? (
        <p>Loading</p> ) : blog ? (
          blog?.map((item, index) => (
           item.id === id ? (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}  >
              <BlogCard key={index} blog={item} />
              <StyledButton onClick={handleClick}>UPDATE</StyledButton>
            </Grid>
            ) : null
          )) ) : (<h3>No Data</h3>
          )}
    </div>
  );
};

export default Details;
