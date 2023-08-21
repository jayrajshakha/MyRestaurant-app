import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

function Contact() {
  return (
    <Layout>
      <Box sx={{
        textAlign:'center',
        my: 15,
        mx : 2,
        '& h4':{
            fontWeight: 'bold'
        },
        '& p':{
           textAlign: 'justify',
          my: 2,
          fontSize: '1rem',
          p: 2,
        },
        '@media (max-width: 600px)':{
          mt : '20px',
        }
       }}>
        <Typography variant='h4'>
           Contact My Restaurant
        </Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus totam perferendis natus soluta, harum aperiam magni! Quo cupiditate aperiam dolor aut necessitatibus facere rerum ipsum, odio repellendus impedit doloremque autem.
        </p>
      </Box>
      <Box sx={{width: '600px',m:3,ml:10, '@media (max-width : 600px)':{
        width : '300px',
        ml: 5,
      }}}>
        <TableContainer component={'paper'}>
          <Table aria-label='contact table'>
           <TableHead>
             <TableRow>
              <TableCell sx={{bgcolor: 'black', color:'white', textAlign:'center'}}>
                Contact Detail
              </TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
            <TableRow>
              <TableCell>
                <SupportAgentIcon sx={{pt: 1.5, color:'red'}}/> 1800-34936 (tallfree)
              </TableCell>
            </TableRow>
            <TableRow>
            <TableCell>
                <MailIcon sx={{pt: 1.5, color:'purple'}}/> help@myrestourant.com
              </TableCell>

            </TableRow>
            <TableRow>
            <TableCell>
                <CallIcon sx={{pt: 1.5, color:'green'}}/>  9836473756 
              </TableCell>

            </TableRow>
           </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact
