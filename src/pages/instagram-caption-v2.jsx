import { InstagramCaptionFormV2Provider } from "@hooks/useInstagramCaptionFormV2";
import InstagramCaptionFormV2Root from "@views/InstagramCaptionFormV2";
import React from "react";

const InstagramCaption = () => {
  return (
    <InstagramCaptionFormV2Provider>
      <InstagramCaptionFormV2Root />
    </InstagramCaptionFormV2Provider>
  );
};

export default InstagramCaption;
