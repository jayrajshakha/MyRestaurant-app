import React, { useState } from 'react'
import { AppBar, Box, Toolbar, Typography, IconButton, Drawer, Divider } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { NavLink } from 'react-router-dom';
import './../../Styles/Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import logo from './../../images/logo.svg'



function Header() {

  const [mobileOpen, setMobileopen] = useState(false)

  // Handle Menu click

  function HandlerToggle(){

    setMobileopen(!mobileOpen)
  }


  // Menu Drawer 

  const drawer =(

    <Box 
    sx={{textAlign:'center'}}
    onClick={HandlerToggle}>
             <Typography
              variant='h6'
              component={'div'}
              color={'goldenrod'}
              sx={{ flexGrow: 1, fontFamily: 'cursive', bgcolor: 'black',color: 'goldenrod' }}>
              <img src={logo} alt="logo" height={'70'} width={'250'} />
            </Typography>
            <Divider>

            </Divider>
              <ul
                className='mobile-navigation'>
                <li>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/menu'>Manu</NavLink>
                </li>
                <li>
                  <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                  <NavLink to='/contact'>Contact</NavLink>
                </li>
              </ul>
            
    </Box>


  )

 
  return (
    <>
      <Box>
        <AppBar
          component={'nav'}
          sx={{ bgcolor: 'black' }}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label="open drawer"
              edge='start'
              sx={{ mg: 3, display: { sm: 'none' } }}
              onClick={HandlerToggle}
             >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              component={'div'}
              color={'goldenrod'}
              sx={{ flexGrow: 1, fontFamily: 'cursive' }}>
               <img src={logo} alt="logo" height={'70'} width={'250'} />

            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul
                className='navigation-bar'>
                <li>
                  <NavLink activeClassName='active' to='/'>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/menu'>Manu</NavLink>
                </li>
                <li>
                  <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                  <NavLink to='/contact'>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={'nav'}>
          <Drawer 
          sx={{display:{xs:'block',sm:'none'}, '& .MuiDrawer-paper' :{
            width : '240px',
            boxSizing:'border-box'
          } }}
          open={mobileOpen}
          
          onClose={HandlerToggle}
          >
            {drawer}
          </Drawer>  
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  )
}

export default Header
