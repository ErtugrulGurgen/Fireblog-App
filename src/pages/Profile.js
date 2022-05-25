import { Typography } from '@mui/material';
import React from 'react'
import BlogCard from '../components/BlogCard';
import { useAuth } from '../contexts/AuthContextProvider';
import { useBlogs } from '../contexts/BlogFunctions';

const Profile = () => {
  const {currentUser} = useAuth();
  const blog = useBlogs();

  return (
    <div>
      <div style={{margin:"20px"}}>
       {currentUser === undefined ? (
          <p>Loading</p> ) : currentUser ? (
            <h2>{currentUser.email}</h2>): null }
      </div>
      <Typography
        variant="h4"
        component="h1"
        fontFamily={"Girassol"}
        marginTop="2rem"
        marginBottom="2rem"
        color={"darkblue"}
      >
        ──── MY BLOGS ────
      </Typography>
      <div style={{display: "flex", justifyContent: "center"}}>
        {blog === undefined && currentUser === undefined ? (
          <p>Loading</p> ) : blog ? (
        blog?.map((item, index) => item.blogger === currentUser.email ? ((console.log(item.blogger, currentUser.email)),
          <div style={{width:"25vw"}}>
          <BlogCard
          key={index}
            blog={item}
          />
          </div>
        ) : null 
        ) )  : (<h3>No Data</h3>
        )}
      </div>
    </div>
  )
}

export default Profile