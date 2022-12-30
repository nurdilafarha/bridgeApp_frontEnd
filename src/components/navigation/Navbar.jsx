import { AppBar, Avatar, Badge, Box, IconButton, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Notifications } from '@mui/icons-material';
import ForumIcon from '@mui/icons-material/Forum';

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

function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
}

function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

const UserBox  = styled(Box)(({ theme }) => ({ 
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]:{
      display: "none",
    }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false)
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
            <Avatar sx={{width: 30, height:30, }} {...stringAvatar('Nurdila Farha')} 
              onClick={(e) => setOpen(true)}
            />
        </Icons>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={e=>setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem component="a" href="/halamanProfil">Profile</MenuItem>
          <MenuItem component="a" href="/login">Logout</MenuItem>
        </Menu>
    </AppBar>
  )
}

export default Navbar