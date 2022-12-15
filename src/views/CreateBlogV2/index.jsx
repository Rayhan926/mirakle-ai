import Header from "@components/Header";
import React from "react";
import ConfirmBeforeExitModal from "./components/ConfirmBeforeExitModal";
import CreateBlogForm from "./components/CreateBlogForm";

const CreateBlogV2 = () => {
  return (
    <>
      <div className="bg-[#f1f1f1] min-h-screen pb-9 lg:pb-[50px]">
        <Header />
        <CreateBlogForm />
      </div>
      <ConfirmBeforeExitModal />
    </>
  );
};

export default CreateBlogV2;
