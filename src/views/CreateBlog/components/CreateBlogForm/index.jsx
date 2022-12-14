import useCreateBlog from "hooks/useCreateBlog";
import React from "react";
import FormProgressBar from "../FormProgressBar";

import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";

const CreateBlogForm = () => {
  const { activeStep } = useCreateBlog();
  return (
    <div className="px-5">
      <div className="max-w-[533px] mx-auto mt-9 lg:mt-[50px] relative">
        <FormProgressBar />
        <div className="rounded-[5px] rounded-t-none border border-[#DDDDDD] bg-white shadow-[0px_4px_4px_rgba(0_0_0_0.09)] px-5 py-6 lg:py-10 lg:px-[50px]">
          {activeStep === 1 && <Step1 />}
          {activeStep === 2 && <Step2 />}
          {activeStep === 3 && <Step3 />}
        </div>
      </div>
    </div>
  );
};

export default CreateBlogForm;
