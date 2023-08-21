import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Typography } from '@mui/material'

function About() {
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
          Wel Come to My Restaurant
        </Typography>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eos, rem modi sit eveniet autem laborum, iusto similique nam facere dolorem? Explicabo qui illo totam cum, suscipit ducimus vitae facilis ut vel nobis, nihil quaerat deserunt ullam quos excepturi recusandae maiores fuga dolore atque magnam! Ducimus exercitationem rerum molestiae voluptatum iure delectus animi assumenda omnis quo aperiam consequuntur explicabo, maxime ex incidunt molestias aliquid a nihil deleniti officia debitis. Ducimus quidem minima accusamus quo error officiis corrupti praesentium ab maiores, incidunt possimus magni expedita. Sed optio dolor modi tenetur earum cupiditate velit excepturi laudantium minima necessitatibus! Quas quod labore veritatis.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nobis dicta perspiciatis cupiditate illum id vero eum maiores, ipsum ipsa nesciunt doloribus optio consequuntur assumenda eligendi doloremque consequatur aperiam vel quisquam! Quaerat totam sed ab ea ipsum similique? Iure ex illo praesentium dolore dignissimos, distinctio accusantium molestias temporibus totam, consequatur culpa quam sunt vitae, debitis repudiandae officiis laudantium beatae vero velit ducimus magnam? Debitis enim nam aliquid, ea iure fuga eius sit, ab labore cupiditate earum sapiente eaque laborum repudiandae maxime, animi est minus laudantium assumenda. Ducimus, officia consequatur tempora, quod sequi architecto odit nam accusantium aliquam aspernatur quae fugiat.
        </p>

  
       </Box>
    </Layout>
  )
}

export default About
