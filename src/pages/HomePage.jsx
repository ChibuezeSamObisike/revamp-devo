import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Bloglist from "../components/blog-list";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Bloglist />
      <Footer />
    </>
  );
};

export default HomePage;
