import { InstagramCaptionFormProvider } from "@hooks/useInstagramCaptionForm";
import InstagramCaptionFormRoot from "@views/InstagramCaptionForm";
import React from "react";

const InstagramCaption = () => {
  return (
    <InstagramCaptionFormProvider>
      <InstagramCaptionFormRoot />
    </InstagramCaptionFormProvider>
  );
};

export default InstagramCaption;
