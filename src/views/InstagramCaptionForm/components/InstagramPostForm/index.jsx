import useInstagramCaptionForm from "@hooks/useInstagramCaptionForm";
import React from "react";
import FormProgressBar from "../FormProgressBar";

import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";

const InstagramPostForm = () => {
  const { activeStep } = useInstagramCaptionForm();
  return (
    <div className="px-5">
      <div className="max-w-[533px] mx-auto mt-14 lg:mt-[50px]">
        <h1 className="text-center font-bold text-dark mb-10">
          Instagram Caption
        </h1>

        <div className="relative">
          <FormProgressBar />
          <div className="rounded-[5px] rounded-t-none bg-white shadow px-5 py-6 lg:py-10 lg:px-[50px]">
            {activeStep === 1 && <Step1 />}
            {activeStep === 2 && <Step2 />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramPostForm;
