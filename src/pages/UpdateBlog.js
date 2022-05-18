import { Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";
import {updateBlog, useBlogs} from "../contexts/BlogFunctions";
import { StyledButton } from "./RegisterStyles";

const UpdateBlog = () => {
  // const { currentUser } = useAuth();
  const [blogUpdate, setBlogUpdate] = useState({
    title: "",
    image: "",
    description: "",
  });
  
  const navigate = useNavigate();
  const id = useParams()

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      updateBlog(id,blogUpdate);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  // const blog = useBlogs();
  // console.log(blog);
  // const result = blog.filter(item => item.id === id.id);

  // const prevTitle = result[0].title;
  // const prevImage = result[0].image;
  // const prevDescription = result[0].description;

  return <div>
      <Typography
          variant="h4"
          component="h1"
          fontFamily={"Girassol"}
          marginTop="2rem"
          color={"darkblue"}
        >
          ── Update Blog ──
        </Typography>
        <CssBaseline/>
        <Container maxWidth="sm">
          <Grid container spacing={3} padding="10px">
            <Grid item xs={12}>
              <TextField
                id="outlined-text-input"
                label={"Title"}
                // value={prevTitle}
                type="text"
                style={{ width: "20rem" }}
                required
                onChange={(e) => setBlogUpdate({ ...blogUpdate, title: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-url-input"
                label={"Image URL"}
                // value={prevImage}
                type="url"
                style={{ width: "20rem" }}
                required
                onChange={(e) => setBlogUpdate({ ...blogUpdate, image: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-text-input"
                label={"Description"}
                // value={prevDescription}
                type="text"
                style={{ width: "20rem" }}
                multiline
                rows={8}
                required
                onChange={(e) => setBlogUpdate({ ...blogUpdate, description: e.target.value })}
              />
            </Grid>
          </Grid>
          <StyledButton type="submit" onClick={handleSubmit}>Update</StyledButton>
        </Container>
  </div>;
};

export default UpdateBlog
