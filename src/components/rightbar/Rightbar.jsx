import { Description, Home, Send } from '@mui/icons-material'
import { Box, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import './Rightbar.css'

export default function Rightbar ({profile}) {

  const HomeRightbar = () => {
    return(
      <>
      </>
    )
  };


  const ProfileRightbar = () =>{
    return(
      <></>
    )
  }
  return (
    <div className="rightbar">
        <ProfileRightbar/>
    </div> 
  )
};