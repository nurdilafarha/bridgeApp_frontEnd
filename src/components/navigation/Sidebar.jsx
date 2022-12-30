import { Description, Home, Send } from '@mui/icons-material'
import { Container, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <List>
          <ListItem >
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ display: {xs: "none", sm: "block"}}}/>
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton component="a" href="/halamanPosting">
              <ListItemIcon>
                <BorderColorIcon/>
              </ListItemIcon>
              <ListItemText primary="Posting" sx={{ display: {xs: "none", sm: "block"}}}/>
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton component="a" href="/catatan">
              <ListItemIcon>
                <Description/>
              </ListItemIcon>
              <ListItemText primary="Catatan" sx={{ display: {xs: "none", sm: "block"}}} />
            </ListItemButton>
          </ListItem>
      </List>
    </div>
  )
}

export default Sidebar