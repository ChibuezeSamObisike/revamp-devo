import React from 'react';
import { AppBar, Typography, Box } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar
      elevation={0}
      mb='100px'
      position='sticky'
      sx={{
        padding: '25px',
        // marginBottom: '200px',
      }}
    >
      <Box>
        <Typography component='h3' color='common.white'>
          Revamp Devo
        </Typography>
      </Box>
    </AppBar>
  );
}
