import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useBlogs } from "../contexts/BlogFunctions";
import { useAuth } from "../contexts/AuthContextProvider";
import BlogCard from "../components/BlogCard";
import { Grid } from "@mui/material";
import {  useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { currentUser } = useAuth();
  const blog = useBlogs();
  console.log(blog);
  console.log(currentUser);
  
  return (
    <div>
      <Typography
        variant="h4"
        component="h1"
        fontFamily={"Girassol"}
        marginTop="2rem"
        marginBottom="2rem"
        color={"darkblue"}
      >
        ──── Dashboard ────
      </Typography>
      <Grid container spacing={3} justify="center">
        {blog === undefined ? (
          <p>Loading</p> ) : blog ? (
        blog?.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <BlogCard
            blog={item}
          />
          </Grid>
        )) ) : (<h3>No Data</h3>
        )}
      </Grid>
    </div>
  );
};

export default Dashboard;
