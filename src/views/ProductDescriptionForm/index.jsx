import Header from "@components/Header";
import React from "react";
import ConfirmBeforeExitModal from "./components/ConfirmBeforeExitModal";
import ProductDescriptionForm from "./components/ProductDescriptionForm";

const ProductDescriptionFormRoot = () => {
  return (
    <>
      <div className="bg-[#f1f1f1] min-h-screen pb-9 lg:pb-[50px]">
        <Header />
        <ProductDescriptionForm />
      </div>
      <ConfirmBeforeExitModal />
    </>
  );
};

export default ProductDescriptionFormRoot;
