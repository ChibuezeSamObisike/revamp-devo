import React from "react";
import { Typography, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      elevation={0}
      mt='100px'
      sx={{
        padding: "25px",
      }}
      bgcolor='primary.main'
    >
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <Typography component='h3' color='common.white'>
          Revamp Devo 2022
        </Typography>
        <a href='wa.me/+2349064260285'>
          <Typography>Contact us</Typography>
        </a>
      </Box>
    </Box>
  );
}
