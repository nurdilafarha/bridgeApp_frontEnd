import { AppBar, Avatar, Badge, Box, IconButton, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Notifications } from '@mui/icons-material';
import ForumIcon from '@mui/icons-material/Forum';
import { AuthContext } from '../../context/AuthContext';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { logoutCall } from '../../apiCalls';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0px 10px",
    borderRadius: theme.shape.borderRadius,
    width: "20%",
}));

const Icons = styled(Box)(({ theme }) => ({ 
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]:{
      display: "flex",
    }
}));

const UserBox  = styled(Box)(({ theme }) => ({ 
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]:{
      display: "none",
    }
}));

const Navbar = () => {

  const { user, dispatch } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleClick = () => {
    logoutCall(
      dispatch
    );
  }
  return (
    <AppBar position="sticky" sx={{ background: "#7e57c2"}}>
        <StyledToolbar>
        <IconButton size='large' color='inherit'>
              <ForumIcon />
        </IconButton>
        <Typography variant='h5' noWrap sx={{flexGrow:1}}>BRIDGE</Typography>
        <Search><InputBase  placeholder="Search..."/></Search>
        <Icons>
            <Badge badgeContent={2} color="error" ml={10}>
                <Notifications />
            </Badge>
            <Link to ={`/profile/${user.username}`}>
              <img 
              src={
                user.profilePicture
                ? PF+user.profilePicture
                : PF + "noprofile2.jpeg"
              } 
              alt="" 
              className="navbarImg"
              />
            </Link>
            <span className="navbarLink" onClick={handleClick}>Sign Out</span>
        </Icons>
        </StyledToolbar>
    </AppBar>
  )
};

export default Navbar