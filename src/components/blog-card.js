import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Blogcard({
  date,
  title,
  body,
  image,
  description,
  id,
}) {
  const naviage = useNavigate();
  return (
    <Box
      display='flex'
      flexDirection={{ xs: "column-reverse", md: "row" }}
      justifyContent='space-between'
      m={{ xs: "50px", md: "100px" }}
      sx={{ cursor: "pointer" }}
      onClick={() => naviage(`devotion/${id}`)}
    >
      <Box
        display='flex'
        flexDirection='column'
        pr='30px'
        justifyContent='space-between'
      >
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          pt={{ xs: "20px" }}
        >
          <Typography>GOSPEL</Typography>
          <Typography
            variant='body2'
            fontSize='14px'
            fontWeight='600'
            color='text.secondary'
          >
            {date}
          </Typography>
        </Box>
        <Box>
          <Typography variant='h3' component='h3'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary' fontSize='18px'>
            {description}
          </Typography>
        </Box>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          mt={{ xs: "20px", md: "0px" }}
        >
          <Typography color='primary'>Read more</Typography>
          <Typography variant='body2' fontWeight='600' color='text.secondary'>
            4 mins read
          </Typography>
        </Box>
      </Box>
      <Box>
        <img width='100%' height='auto' src={image} alt='Devotion' />
      </Box>
    </Box>
  );
}
