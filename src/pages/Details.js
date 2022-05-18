import { Grid } from "@mui/material";
import React from "react";
import { useParams, useLocation } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { useAuth } from "../contexts/AuthContextProvider";
import { useBlogs } from "../contexts/BlogFunctions";

const Details = () => {
  const {currentUser} = useAuth();
  console.log(currentUser);
  const {id} = useParams();
  console.log(id)
  const blog = useBlogs();
  console.log(blog);
  
  return (
    <div>
      {blog === undefined ? (
        <p>Loading</p> ) : blog ? (
          blog?.map((item, index) => (
           JSON.stringify(item.id) === id ? (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index} >
              <BlogCard key={index} blog={item} />
            </Grid>
            ) : null
          )) ) : (<h3>No Data</h3>
          )}
    </div>
  );
};

export default Details;
