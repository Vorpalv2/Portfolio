import React, { useState } from "react";
import About from "./About";
import BlogCard from "./BlogCard";
import DynamicBlogDataFetcher from "./DynamicBlogDataFetcher";
export default function FifthPage() {
  return (
    <>
      <About
        headerDesc="Yes, I write as well"
        paraDesc=""
        belowParaDesc="Some of the topics i've written about"
      />
      <div className="flex justify-center items-center"></div>
      <DynamicBlogDataFetcher>
        {/* <Search /> */}
        <BlogCard />
      </DynamicBlogDataFetcher>
    </>
  );
}
