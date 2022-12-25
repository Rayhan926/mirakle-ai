import { ProductDescriptionFormProvider } from "@hooks/useProductDescriptionForm";
import ProductDescriptionForm from "@views/ProductDescriptionForm";
import React from "react";

const ProductDescriptionFormPage = () => {
  return (
    <ProductDescriptionFormProvider>
      <ProductDescriptionForm />
    </ProductDescriptionFormProvider>
  );
};

export default ProductDescriptionFormPage;
