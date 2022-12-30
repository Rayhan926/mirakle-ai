import Header from "@components/Header";
import React from "react";
import ConfirmBeforeExitModal from "./components/ConfirmBeforeExitModal";
import InstagramCaptionForm from "./components/InstagramCaptionForm";

const InstagramCaptionFormV2Root = () => {
  return (
    <>
      <div className="bg-[#f1f1f1] min-h-screen pb-9 lg:pb-[50px]">
        <Header />
        <InstagramCaptionForm />
      </div>
      <ConfirmBeforeExitModal />
    </>
  );
};

export default InstagramCaptionFormV2Root;
