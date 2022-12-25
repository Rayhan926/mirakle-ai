import Header from "@components/Header";
import React from "react";
import ConfirmBeforeExitModal from "./components/ConfirmBeforeExitModal";
import InstagramPostForm from "./components/InstagramPostForm";

const InstagramCaptionFormRoot = () => {
  return (
    <>
      <div className="bg-[#f1f1f1] min-h-screen pb-9 lg:pb-[50px]">
        <Header />
        <InstagramPostForm />
      </div>
      <ConfirmBeforeExitModal />
    </>
  );
};

export default InstagramCaptionFormRoot;
