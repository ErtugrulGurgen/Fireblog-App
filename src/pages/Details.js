import { Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../contexts/BlogFunctions";

const Details = () => {
   const { id } = useParams();
  return (
    <div>
      <Grid container  justify="center">
          <Grid
            item
            xs={12}
          >
            <BlogCard blog={id} />
          </Grid>
      </Grid>
    </div>
  );
};

export default Details;
