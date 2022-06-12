import {
  Card,
  Box,
  Rating,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import { updateBlog } from "../contexts/BlogFunctions";

const BlogCard = ({ blog }) => {
  const { currentUser } = useAuth();
  const date = new Date();
  const today = date.toLocaleDateString();
  const [count, setCount] = useState(blog.count);
  const [color, setColor] = useState("pink");
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const [value, setValue] = useState(blog.get_rating);
  const [raters, setRaters] = useState(blog.raters);
  const totalRating = blog.get_rating * blog.raters;
  const [disabled, setDisabled] = useState(false);
  const handleClick = (e) => {
    if (currentUser) {
      setClicked(!clicked);
      color === "pink" ? setColor("red") : setColor("pink");
      clicked === false ? setCount(count + 1) : setCount(count - 1);
    }
  };
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const handleRate = (e) => {
    const blogValue = parseInt((totalRating + value) / (raters + 1));
    setDisabled(true);
    if (currentUser) {
      updateBlog(blog.id, {
        ...blog,
        get_rating: blogValue,
        raters: raters + 1,
      });
    }
    setValue(blogValue);
  };
  updateBlog(blog.id, {
    ...blog,
    count: count,
  });

  return (
    <div>
      <Card sx={{ maxWidth: "75vw" }}>
        <div
          onClick={() => navigate("/Fireblog-App/details/" + blog.id)}
          style={{ cursor: "pointer" }}
        >
          <CardMedia component="img" height="250" image={blog.image} alt="" />
          <CardHeader title={blog.title} subheader={today} />
          <CardContent sx={{ height: 150, overflow: "hidden" }}>
            <Typography variant="body2" color="text.secondary">
              {blog.description}
            </Typography>
          </CardContent>
        </div>
        <div>
          <Typography component="legend">Rating: {blog.get_rating}</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={handleChange}
          />
        </div>
        <div style={{fontSize: "12px", marginBottom:"10px"}}> Avg. Rating: {blog.get_rating}</div>
        <Button
          variant="contained"
          color="success"
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={handleRate}
          disabled={disabled}
        >
          RATE
        </Button>

        <div
          style={{
            display: "flex",
            justifyContent: "start",
            marginTop: "10px",
          }}
        >
          <PersonIcon />
          <>{blog.blogger}</>
        </div>
        <CardActions>
          <IconButton aria-label="add to favorites" onClick={handleClick}>
            <FavoriteIcon style={{ color: color, marginRight: "10px" }} />
            <p style={{ fontSize: "1rem", paddingTop: "15px" }}>{blog.count}</p>
          </IconButton>
          <IconButton aria-label="comment">
            <ChatBubbleOutlineIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default BlogCard;
