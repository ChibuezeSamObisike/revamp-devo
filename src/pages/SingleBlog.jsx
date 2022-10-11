import { Typography, Box, Divider } from "@mui/material";
import { Container } from "@mui/system";
import { useParams } from "react-router-dom";
import React from "react";
import data from "../data/data";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const SingleBlog = () => {
  const { id } = useParams();
  const dataObj = data[id - 1];
  return (
    <div>
      <Navbar />
      <Container sx={{ padding: "10px" }}>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          width='100%'
        >
          <Typography variant='h2'>{dataObj.title}</Typography>
          <Typography variant='body1'>
            Bible Study {dataObj.bibleStudy}
          </Typography>
        </Box>
        <Divider />
        <Box py='30px'>
          <img width='100%' height='30%' src={dataObj.image} alt='Devotion' />
        </Box>
        <Typography
          sx={{ marginBottom: "40px" }}
          dangerouslySetInnerHTML={{ __html: dataObj.body }}
        ></Typography>
      </Container>
      <Footer />
    </div>
  );
};

export default SingleBlog;
