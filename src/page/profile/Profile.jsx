import React, { useContext } from 'react'
import './Profile.css'
import Feed from './../../components/feed/Feed'
import Rightbar from './../../components/feed/Feed'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import {Add} from "@mui/icons-material";
import RemoveIcon from '@mui/icons-material/Remove';

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;
  const {user:currentUser, dispatch} = useContext(AuthContext);
  const [followed, setFollowed] = useState(currentUser.followings.includes(user?._id) );

  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?._id));
  }, [currentUser, user.id]);

  useEffect(()=>{
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);     
      setUser(res.data)
    };
    fetchUser();
  }, [username]);

  const handleClick = async () => {
    try{
        if(followed){
            await axios.put("/users/"+user._id+"/unfollow", {
                userId:currentUser._id,
            });
            dispatch({type:"FOLLOW", payload: user._id})
        }else {
            await axios.put("/users/"+user._id+"/follow", {
                userId: currentUser._id,
            });
            dispatch({type:"FOLLOW", payload: user._id})
        }
    }catch(err){
        console.log(err);
    }
    setFollowed(!followed)
  }
  return (
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
                <img  
                className="profileCoverImg"
                src={user.coverPicture ? PF+user.coverPicture : PF+"cover.jpeg"}
                alt=""  
                />
                <img  
                className="profileUserImg"
                src={user.profilePicture ? PF+user.profilePicture : PF+"noprofile2.jpeg"}
                alt=""  
                />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
                {user.username !== currentUser.username && (
                    <button className="followButton" onClick={handleClick}>
                        {followed ? "Unfollow" : "Follow"}
                        {followed ? <RemoveIcon /> : <Add />}
                    </button>
                )}

            </div>
            <div className="profileDesc">
                <h4 className="profileDescTitle">Informasi Pengguna</h4>
                <div className="profileDescItem">
                    <span className="profileDescKey">Alamat: </span>
                    <span className="profileDescValue">Jl. Baru No. 111</span>
                </div>
                <div className="profileDescItem">
                    <span className="profileDescKey">Guru Mata Pelajaran : </span>
                    <span className="profileDescValue">Bahasa Inggris</span>
                </div>
                <div className="profileDescItem">
                    <span className="profileDescKey">Tahun Mengajar : </span>
                    <span className="profileDescValue">2015 - sekarang</span>
                </div>
                <div className="profileDescItem">
                    <span className="profileDescKey">Wali Kelas : </span>
                    <span className="profileDescValue">2A</span>
                </div>
            </div>
        </div>
            <div className="profileRightBottom">
                <h4 className="profileDescTitle2">Postingan {username}</h4>
                <Feed username={username}/>
            </div>
    </div>


        
        
  )
};
