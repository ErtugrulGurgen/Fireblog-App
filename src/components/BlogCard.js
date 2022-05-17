import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from 'react'
import { useAuth } from '../contexts/AuthContextProvider';

const BlogCard = ({blog}) => {
    const {currentUser} = useAuth();
  return (
    <div>
    <Card sx={{ maxWidth: 345 }} style={{cursor:"pointer"}} >
      <CardMedia
        component="img"
        height="194"
        image = {blog.image}
        alt=""
      />
      <CardHeader
        title={blog.title}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {blog.description}
        </Typography>
      </CardContent>
      <div style={{display:"flex", justifyContent:"start"}}>
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