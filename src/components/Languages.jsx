import { Card, CardMedia, Grid, Paper, Typography, Box } from '@mui/material';
import React from 'react';

const technologies = [
  { itemName: 'JavaScript', image: '/public/javascriptlogo.png' },
  { itemName: 'HTML', image: 'htmllogo.png' },
  { itemName: 'CSS', image: 'csslogo.webp' },
  { itemName: 'React', image: 'React-icon.svg' },
  { itemName: 'Node', image: 'Node.js_logo.svg' },
  { itemName: 'Express', image: 'Expressjs.png' },
  { itemName: 'MySQL', image: 'MySQL_logo.svg.png' },
  { itemName: 'Vite', image: 'Vitejs-logo.svg.png' },
];
export default function Languages() {
  return (
    <Paper sx={{ padding: '2rem' }} id="skills">
      <Box textAlign='center' py={'2rem'}>
        <Typography variant='h5' display='inline-block'>
          These are the
        </Typography>{' '}
        <Typography variant='h5' color='secondary' display='inline-block'>
          technologies
        </Typography>{' '}
        <Typography variant='h5' display='inline-block'>
          I've been using.
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        mx={'auto'}
  
      >
        {technologies.map((technology) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            key={technology.itemName}
            alignSelf={'center'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box
              component='img'
              alt={technology.itemName}
              src={technology.image}
              className='language_img'
              sx={{
                maxWidth: '100px'
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
