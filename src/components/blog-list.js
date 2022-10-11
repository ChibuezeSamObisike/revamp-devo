import React from "react";
import data from "../data/data";
import Blogcard from "./blog-card";

export default function Bloglist() {
  return (
    <div>
      {data.map((d) => (
        <Blogcard {...d} key={d.id} />
      ))}
    </div>
  );
}
