import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import Data from '../Data/Data'

function Menu() {
  return (
    <Layout>
     <Box sx={{display : 'flex', flexWrap: 'wrap' ,justifyContent: 'center'}}>
     {
       Data.map(item =>(
          <Card style ={{margin:10, display:'flex', maxWidth: '390px'}}> 
            <CardActionArea>
            <CardMedia sx={{minHeight: '370px'}} component={'img'} src={item.image} alt={'item.name'}>

              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant='h5' component={'div'}>
                  {item.name}
                </Typography>
                <Typography >
                  {item.describtion}
                </Typography> 
                <Typography sx={{color : 'dark', fontWeight: 'bold' }}>
                  {item.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

       )
      )
     }

     </Box>
     </Layout>
  )
}

export default Menu
