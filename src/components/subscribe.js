import { Button } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";

export default function Subscribe() {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      mt='20px'
      p='20px'
      width={{ xs: "95%", md: "60%" }}
      backgroundColor='#fff'
      borderRadius='5px'
    >
      <input
        placeholder='Subscribe to get daily devotional'
        style={{
          width: "100%",
          outline: "none",
          border: "none",
          "&>::placeholder": {
            fontSize: "20px",
          },
        }}
      />
      <Button borderRadius='5px' variant='contained'>
        Subscribe
      </Button>
    </Box>
  );
}
