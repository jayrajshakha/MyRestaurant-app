import { Box, Typography, Link } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
      
    <>
      <Box sx={{bgcolor: '#1A1A19', textAlign:'center', color:'white', p:3}}>
        <Box sx={{
            my:3,
            '& svg':{
                fontSize:'60px',
                mr : 2,
                cursor: 'pointer'
            },
            '& svg:hover':{
                color: 'goldenrod',
                transform : 'translateX(5px)',
                transition : 'all 400ms'
            }
        }
        }>
      
           <Link 
           sx={{color: 'white'}} 
           href='https://www.instagram.com/1jovial/'> 
           <InstagramIcon /> 
           </Link>
           <Link 
           sx={{color: 'white'}} 
           href='https://twitter.com/1Joviall'> 
           <TwitterIcon /> 
           </Link>
           <Link 
           sx={{color: 'white'}} 
           href='https://github.com/jayrajshakha'> 
           <GitHubIcon /> 
           </Link>
           <Link 
           sx={{color: 'white'}} 
           href='https://www.linkedin.com/in/jayrajshakha01/'> 
           <LinkedInIcon /> 
           </Link>

        </Box>
       <Typography variant='h6' 
         sx={{

            "@media(max-width: 600px)":{
                fontSize:"1rem",
            }

         }} 
       >
          All right reserved &copy; Jovial Group
       </Typography>

      </Box>
    </>

  )
}

export default Footer
