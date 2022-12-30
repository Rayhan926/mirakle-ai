import { FreeStyleFormProvider } from "@hooks/useFreeStyleForm";
import FreeStyleFormRoot from "@views/FreeStyleForm";
import React from "react";

const InstagramCaption = () => {
  return (
    <FreeStyleFormProvider>
      <FreeStyleFormRoot />
    </FreeStyleFormProvider>
  );
};

export default InstagramCaption;
