import useCreateBlog from "@hooks/useCreateBlog";
import React from "react";

const FormProgressBar = () => {
  const { activeStep, totalSteps } = useCreateBlog();

  const progressPercentage = (activeStep / totalSteps) * 100;
  return (
    <div className="h-3 w-full bg-[#D9D9D9] rounded-t-lg overflow-hidden">
      <div
        className="h-full bg-[#8984DE] duration-200"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

export default FormProgressBar;
