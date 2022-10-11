import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SingleBlog from "../pages/SingleBlog";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/devotion/:id' element={<SingleBlog />} />
        <Route path='*' element={() => <h1>Not found</h1>} />
      </Routes>
    </Router>
  );
}
