import {
  Avatar,
  Box,
  Container,
  Typography,
  Paper,
  Stack,
} from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import Divider from '@mui/material/Divider';

export default function HeroSection() {
  return (
    <Paper>
      <Container sx={{ maxWidth: '600px', textAlign: 'center', py: '4rem' }}>
        <Avatar
          alt='Chris Marsh'
          src='/pfp.jpg'
          sx={{ width: 100, height: 100, mx: 'auto' }}
          className=''
        />
        <Typography variant='h4' mt='1rem' display='inline-block'>
          Hi there! I'm
        </Typography>
        {'  '}
        <Typography color='secondary' variant='h4' display='inline-block'>
          Chris Marsh
        </Typography>
        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
          <Typography variant='body1' display='inline-block'>
            I'm a recent graduate of the
          </Typography>{' '}
          <Typography variant='body1' color='secondary' display='inline-block'>
            Institute of Data
          </Typography>{' '}
          <Typography variant='body1' display='inline-block'>
            with an avid interest and passion for Software Engineering. Strong
            foundation in providing leadership across high pressure work
            environments in the healthcare sector. Dedicated to supporting team
            members and stakeholders in the fast-paced world of Software
            Engineering. I am eager to continue my professional development and
            start using the knowledge I've acquired from the Institute of Data.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: '1rem' }}>
          <Stack
            direction='row'
            spacing={2}
            divider={<Divider orientation='vertical' flexItem />}
          >
            <a href='https://github.com/cjm97' target='_blank'>
              <GitHubIcon color='secondary' />
            </a>
            <a href='https://www.linkedin.com/in/chrismarsh44/' target='_blank'>
              <LinkedInIcon color='secondary' />
            </a>
            <a
              href='/RESUME.pdf'
              target='_blank
          '
            >
              <DescriptionIcon color='secondary' />
            </a>
            <a href='mailto: christophermarsh97@gmail.com'>
              <EmailIcon color='secondary' />
            </a>
          </Stack>
        </Box>
      </Container>
    </Paper>
  );
}
