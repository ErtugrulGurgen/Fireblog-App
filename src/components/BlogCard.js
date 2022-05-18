import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from 'react'
import { useAuth } from '../contexts/AuthContextProvider';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({blog}) => {
    const {currentUser} = useAuth();    
  return (
    <div>
    <Card sx={{ maxWidth: "75vw"}} >
      <CardMedia
        component="img"
        height="250"
        image = {blog.image}
        alt=""
      />
      <CardHeader
        title={blog.title}
        subheader="September 14, 2016"
      />
      <CardContent sx={{height: 150, overflow:"hidden"}}>
        <Typography variant="body2" color="text.secondary">
          {blog.description}
        </Typography>
      </CardContent>
      <div style={{display:"flex", justifyContent:"start", marginTop: "10px"}}>
        <PersonIcon/>
        <>{currentUser.email}</>
        </div>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="comment">
          <ChatBubbleOutlineIcon />
        </IconButton>
      </CardActions>
    </Card>
    </div>
  )
}

export default BlogCard