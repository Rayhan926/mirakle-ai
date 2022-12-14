import Header from "@components/Header";
import React from "react";
import CreateBlogForm from "./components/CreateBlogForm";

const CreateBlog = () => {
  return (
    <div className="bg-[#f1f1f1] min-h-screen pb-9 lg:pb-[50px]">
      <Header />
      <CreateBlogForm />
    </div>
  );
};

export default CreateBlog;
