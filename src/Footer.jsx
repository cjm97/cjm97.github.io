import { Paper, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
  return (
    <Paper sx={{py: '6rem'}}>
      <Typography variant='h6' textAlign={'center'}>Chris Marsh &copy; 2023</Typography>
    </Paper>
  );
}
