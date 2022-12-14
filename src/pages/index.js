import CreateBlog from "@views/CreateBlog";
import { CreateBlogProvider } from "hooks/useCreateBlog";
import React from "react";

const Home = () => {
  return (
    <>
      <CreateBlogProvider>
        <CreateBlog />
      </CreateBlogProvider>
    </>
  );
};

export default Home;
