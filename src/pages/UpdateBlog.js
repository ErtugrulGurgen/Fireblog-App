import {
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";
import { updateBlog, useBlogs } from "../contexts/BlogFunctions";
import { StyledButton } from "./RegisterStyles";

const UpdateBlog = () => {
  const { currentUser } = useAuth();

  const navigate = useNavigate();
  const id = useParams();
  // console.log(id)
  const strID = id.id;
  // console.log(strID)

  const blog = useBlogs();
  console.log(blog)

  const [blogUpdate, setBlogUpdate] = useState({
    title: "",
    image: "",
    description: "",
    blogger: currentUser.email,
    count: 0,
  });

  return (
    <div>
      {blog === undefined ? (
        <p>Loading</p>
      ) : blog ? (
        blog?.map((item, index) =>
          item.id === strID ? ( 
            <div>
              <Typography
                variant="h4"
                component="h1"
                fontFamily={"Girassol"}
                marginTop="2rem"
                color={"darkblue"}
              >
                ── Update Blog ──
              </Typography>
              <CssBaseline />
              <Container maxWidth="sm">
                <Grid container spacing={3} padding="10px">
                  <Grid item xs={12} margin="10px">
                    <TextField
                      id="outlined-text-input"
                      defaultValue={item.title}
                      label="Title"
                      type="text"
                      style={{ width: "20rem" }}
                      required
                      onChange={(e) =>
                        setBlogUpdate({
                          ...blogUpdate,
                          title: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} margin="10px">
                    <TextField
                      id="outlined-url-input"
                      defaultValue={item.image}
                      label="Image"
                      type="url"
                      style={{ width: "20rem" }}
                      required
                      onChange={(e) =>
                        setBlogUpdate({
                          ...blogUpdate,
                          image: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} margin="10px">
                    <TextField
                      id="outlined-text-input"
                      defaultValue={item.description}
                      label="Description"
                      type="text"
                      style={{ width: "20rem" }}
                      multiline
                      rows={8}
                      required
                      onChange={(e) =>
                        setBlogUpdate({
                          ...blogUpdate,
                          description: e.target.value,
                        })
                      }
                    />
                  </Grid>
                </Grid>
                <StyledButton type="submit" onClick={() => {
    // e.preventDefault();
    try {
      const bloge = () => {
        if (blogUpdate.title === "") {
          blogUpdate.title = item.title;
          // setBlogUpdate({...blogUpdate, title : item.title});
          console.log(blogUpdate.title);
        }
        if (blogUpdate.image === "") {
          blogUpdate.image = item.image;
          console.log(blogUpdate.image)
        }
        if (blogUpdate.description === "") {
          blogUpdate.description = item.description;
          console.log(blogUpdate.description)
      }
      blogUpdate.count = item.count;
    }
        // blogUpdate.title === "" ? blogUpdate.title = item.title : " "; 
        // blogUpdate.image === "" ? blogUpdate.image = item.image : " ";
        // blogUpdate.description === "" ? blogUpdate.description = item.description : " ";
        // return blogUpdate.title, blogUpdate.image, blogUpdate.description;
      bloge();
      console.log(blogUpdate);
      updateBlog(strID, blogUpdate);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }}>
                  Update
                </StyledButton>
              </Container>
            </div>
          ) : null
        )
      ) : (
        <h3>No Data</h3>
      )}
    </div>
  );
};

export default UpdateBlog;
