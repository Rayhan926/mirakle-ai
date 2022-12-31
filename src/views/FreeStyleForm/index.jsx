import Header from "@components/Header";
import React from "react";
import ConfirmBeforeExitModal from "./components/ConfirmBeforeExitModal";
import FreeStyleForm from "./components/FreeStyleForm";

const FreeStyleFormRoot = () => {
  return (
    <>
      <div className="bg-[#f1f1f1] min-h-screen pb-9 lg:pb-[50px]">
        <Header />
        <FreeStyleForm />
      </div>
      <ConfirmBeforeExitModal />
    </>
  );
};

export default FreeStyleFormRoot;
