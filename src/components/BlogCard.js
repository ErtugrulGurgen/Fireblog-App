import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import { updateBlog } from "../contexts/BlogFunctions";

const BlogCard = ({ blog }) => {
  const date = new Date();
  const today = date.toLocaleDateString();
  const [count, setCount] = useState(blog.count);
  const [color, setColor] = useState("pink");
  const [clicked, setClicked] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  console.log(clicked, color, count);
  const handleClick = (e) => {
    setClicked(!clicked);
    color === "pink" ? setColor("red") : setColor("pink");
    clicked === false ? setCount(count + 1) : setCount(count - 1);
  };
  updateBlog(blog.id, { ...blog, count: count });
  return (
    <div>
      <Card sx={{ maxWidth: "75vw" }}>
        <div
          onClick={() => navigate("/details/" + blog.id)}
          style={{ cursor: "pointer" }}
        >
          <CardMedia component="img" height="250" image={blog.image} alt="" />
          <CardHeader title={blog.title} subheader={today}/>
          <CardContent sx={{ height: 150, overflow: "hidden" }}>
            <Typography variant="body2" color="text.secondary">
              {blog.description}
            </Typography>
          </CardContent>
        </div>
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
