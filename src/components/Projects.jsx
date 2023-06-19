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
    projectName: 'To Do List',
    image: '/todolist.png',
    description:
      "HTML, CSS and JavaScript project utilising the Web Storage API to create lists that contain 'To Do' tasks.",
    liveLink: 'https://cjm97.github.io/TOP-Todo/',
    repoLink: 'https://github.com/cjm97/TOP-Todo',
  },
  {
    projectName: 'Library',
    image: '/Library.io.png',
    description:
      'Institute of Data Capstone project. Fullstack Web Application to track and review books. Made with React, Node.js, Express & MySQL.',
    liveLink: null,
    repoLink: 'https://github.com/cjm97/library.io',
  },
  {
    projectName: 'Tic Tac Toe',
    image: '/Tic-Tac-Toe.png',
    description:
      "Tic-Tac-Toe game application made with HTML, CSS and JS as part of 'The Odin Project' course.",
    liveLink: 'https://cjm97.github.io/TOP-Tic-Tac-Toe/',
    repoLink: 'https://github.com/cjm97/TOP-Tic-Tac-Toe',
  },
];
export default function Projects() {
  return (
    <Paper sx={{ padding: '2rem' }} id='projects'>
      <Box textAlign={'center'}>
        <Typography variant='h5' py={'2rem'} display={'inline-block'}>
          These are some of my
        </Typography>{' '}
        <Typography color='secondary' variant='h5' display={'inline-block'}>
          projects.
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        justifyContent={'center'}
        alignItems={'center'}
      >
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
                {project.liveLink === null ? (
                  <Button size='small' href={project.repoLink} target='_blank'>
                    View Project
                  </Button>
                ) : (
                  <>
                    <Button
                      size='small'
                      href={project.repoLink}
                      target='_blank'
                    >
                      View Code
                    </Button>
                    <Button
                      size='small'
                      href={project.liveLink}
                      target='_blank'
                    >
                      View Project
                    </Button>
                  </>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
