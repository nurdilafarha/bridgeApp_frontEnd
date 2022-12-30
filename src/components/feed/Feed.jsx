import React, { useEffect, useState } from 'react';
import './Feed.css';
import Post from "./../post/Post";
import axios from "axios";

export default function Feed () {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () => {
      const res = await axios.get("posts/63ae15516e93ad17cd4596f2");     
      setPosts(res.data)
    };
    fetchPosts();
  },[]);

  return (
      <div className="feed" >
        <div className="feedWrapper">
          {posts.map((p) => (
              <Post key={p.id} post={p}/>
          ))};
        </div>
      </div>
  )
};