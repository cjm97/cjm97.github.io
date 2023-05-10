import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid, Paper } from '@mui/material';

const projectItems = [
  {
    projectName: 'Dice Generator',
    image: '/public/dicegeneratorproject.png',
    description:
      'Simple JavaScript based exercise for generating a random number on a particular dice. Dices range from d4 to a d20.',
  },
  {
    projectName: 'Library',
    image: '/public/Library.io.png',
    description:
      'Institute of Data Capstone project. Fullstack Web Application to track and review books. Made with React, Node.js, Express & MySQL.',
  },
  {
    projectName: 'Rock Paper Scissors',
    image: '/public/topsrpsproject.png',
    description:
      "Rock, paper, scissors JavaScript project made as part of the fundamental's section of 'The Odin Project' course.",
  },
];
export default function Projects() {
  return (
    <Paper sx={{ padding: '2rem' }} id="projects">
      <Box textAlign={'center'}>
        <Typography variant='h5' py={'2rem'} display={'inline-block'}>
          These are some of my
        </Typography>{' '}
        <Typography color='secondary' variant='h5' display={'inline-block'}>
          projects.
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent={'center'} alignItems={'center'}>
        {projectItems.map((project) => (
          <Grid item xs={8} sm={6} md={4} key={project.projectName}>
            <Card variant='outlined' sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 280 }}
                image={project.image}
                title={project.projectName}
                p={'1rem'}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {project.projectName}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>View Project</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
