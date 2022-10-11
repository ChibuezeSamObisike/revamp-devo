import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Subscribe from "./subscribe";

export default function Header() {
  return (
    <Box
      sx={{ backgroundColor: "primary.light" }}
      display='flex'
      alignItems='center'
      flexDirection='column'
      justifyContent='center'
      p='50px'
    >
      <Typography fontWeight='bold' variant='h1' mt='50px' color='common.black'>
        Revamp Devo
      </Typography>
      <Typography
        color='text.secondary'
        mt='20px'
        variant='body2'
        component='body2'
        textAlign={{ md: "center", xs: "left" }}
      >
        This is a devotional that will change your life and keep <br /> you in
        sync with God's plan for your life
      </Typography>

      <Subscribe />
    </Box>
  );
}
